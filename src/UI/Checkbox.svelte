<script>
  import { createEventDispatcher } from "svelte";

  export let id;
  export let isChecked;

  const dispatch = createEventDispatcher();
</script>

<label class="c-checkbox" for="checkbox-{id}">
  <input
    type="checkbox"
    id="checkbox-{id}"
    class="c-checkbox__input"
    bind:checked={isChecked}
    on:change={() => dispatch('change', isChecked)} />
  <span class="c-checkbox__fake" />
</label>
