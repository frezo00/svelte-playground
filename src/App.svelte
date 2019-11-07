<script>
  import Header from "./UI/Header.svelte";
  import TodoList from "./Todos/TodoList.svelte";
  import TodoForm from "./Todos/TodoForm.svelte";

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
</script>

<style lang="scss" global>
  @import "./scss/global.scss";
</style>

<Header {totalTasks} {doneTasks} />
<main>
  <TodoList bind:todos />
</main>
<footer class="c-footer">
  <button class="c-footer__button" on:click={() => toggleModal(true)}>
    &#43;
  </button>
</footer>

{#if modalOpened}
  <TodoForm
    on:close={() => toggleModal(false)}
    on:submit={() => console.log('submitted')} />
{/if}
