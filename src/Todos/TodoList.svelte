<script>
  import TodoItem from "./TodoItem.svelte";

  export let todos;

  function onTodoChange(changedTodo) {
    todos = todos.map(todo =>
      todo.id === changedTodo.detail.id
        ? { ...todo, isDone: changedTodo.detail.isDone }
        : todo
    );
  }
</script>

<div class="o-container">
  {#each todos as todo (todo.id)}
    <TodoItem {...todo} on:changed={onTodoChange} />
  {:else}
    <em>NO DATA!</em>
  {/each}
</div>
