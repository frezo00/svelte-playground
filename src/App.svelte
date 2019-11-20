<script>
  import Header from "./UI/Header.svelte";
  import TodoList from "./Todos/TodoList.svelte";
  import TodoForm from "./Todos/TodoForm.svelte";
  import { Todo } from "./models/todo.model.js";
  import todoStore from "./store/todo.store.js";

  todoStore.subscribe(t => console.log("sub", t));
  const { getTotal, getCompleted } = todoStore;

  let modalOpened = false;
  function toggleModal(opened) {
    if (opened !== modalOpened) {
      modalOpened = opened;
    }
  }

  function onTodoChange(changedTodo) {
    todoStore.updateTodo(changedTodo.detail);
  }

  function onFormSubmit(data) {
    todoStore.addTodo(data.detail);
    toggleModal(false);
  }
</script>

<style lang="scss" global>
  @import "./scss/global.scss";
</style>

<Header totalTasks={getTotal} doneTasks={getCompleted} />
<main>
  <div class="o-container">
    <TodoList todos={todoStore} on:changed={onTodoChange} />
  </div>
</main>

{#if modalOpened}
  <TodoForm on:submit={onFormSubmit} />
{/if}

<footer class="c-footer">
  <button
    class="c-footer__button {modalOpened ? 'c-footer__button--close' : ''}"
    on:click={() => toggleModal(!modalOpened)} />
</footer>
