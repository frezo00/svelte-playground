<script>
  import { createEventDispatcher } from "svelte";
  import Checkbox from "../UI/Checkbox.svelte";

  export let id;
  export let isDone;
  export let title;
  export let description;

  const dispatch = createEventDispatcher();
</script>

<article class="c-todo">
  <Checkbox
    {id}
    bind:isChecked={isDone}
    on:change={() => dispatch('changed', { id, isDone, title, description })} />

  <div class="c-todo-content">
    <span class="c-todo__title">{title}</span>
    <small class="c-todo__description">{description}</small>
  </div>
</article>
