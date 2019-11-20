<script>
  import Checkbox from "../UI/Checkbox.svelte";

  import { createEventDispatcher } from "svelte";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";

  export let todos;

  const dispatch = createEventDispatcher();

  function onCheckboxChange(event, todo) {
    dispatch("changed", { ...todo, isDone: event.detail });
  }
</script>

{#each $todos as todo (todo.id)}
  <article
    class="c-todo"
    transition:fly={{ y: -300, duration: 500 }}
    animate:flip={{ duration: 500 }}>

    <Checkbox
      id={todo.id}
      isChecked={todo.isDone}
      on:change={e => onCheckboxChange(e, todo)} />

    <div class="c-todo-content">
      <span class="c-todo__title">{todo.title}</span>
      <small class="c-todo__description">{todo.description}</small>
    </div>

  </article>
{:else}
  <em>NO DATA!</em>
{/each}
