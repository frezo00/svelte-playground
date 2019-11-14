<script>
  import Header from "./UI/Header.svelte";
  import TodoList from "./Todos/TodoList.svelte";
  import TodoForm from "./Todos/TodoForm.svelte";
  import { Todo } from "./models/todo.model.js";

  let todos = [
    {
      id: 0,
      isDone: false,
      title: "Test 1",
      description: "Desc 1"
    },
    {
      id: 1,
      isDone: false,
      title: "Test 2",
      description: "Desc 2"
    },
    {
      id: 2,
      isDone: true,
      title: "Test 3",
      description: "Desc 3"
    }
  ];

  $: totalTasks = todos.length;
  $: doneTasks = todos.filter(todo => todo.isDone).length;

  let modalOpened = false;
  function toggleModal(opened) {
    if (opened !== modalOpened) {
      modalOpened = opened;
    }
  }

  function onFormSubmit(data) {
    console.log("form submitted", data.detail);

    const newId = todos[todos.length - 1].id + 1;
    const { title, description, isChecked } = data.detail;
    const newTodo = new Todo(newId, isChecked, title, description);
    todos = [newTodo, ...todos];

    toggleModal(false);
  }
</script>

<style lang="scss" global>
  @import "./scss/global.scss";
</style>

<Header {totalTasks} {doneTasks} />
<main>
  <TodoList bind:todos />
</main>

{#if modalOpened}
  <TodoForm on:submit={onFormSubmit} />
{/if}

<footer class="c-footer">
  <button
    class="c-footer__button {modalOpened ? 'c-footer__button--close' : ''}"
    on:click={() => toggleModal(!modalOpened)} />
</footer>
