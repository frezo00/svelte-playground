<script>
  import TodoItem from "./TodoItem.svelte";
  import todoStore from "../store/todo.store.js";

  export let todos;

  todoStore.subscribe(t => console.log("sub", t));

  function onTodoChange(changedTodo) {
    todos = todos.map(todo =>
      todo.id === changedTodo.detail.id
        ? { ...todo, isDone: changedTodo.detail.isDone }
        : todo
    );
  }
</script>

<div class="o-container">
  {#each $todoStore as todo (todo.id)}
    <TodoItem {...todo} on:changed={onTodoChange} />
  {:else}
    <em>NO DATA!</em>
  {/each}
</div>
