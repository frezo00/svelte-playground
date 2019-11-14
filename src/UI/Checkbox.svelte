<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let id = 0;
  export let isChecked = false;
  export let isBordered = false;
</script>

<label
  class="c-checkbox {isBordered ? 'c-checkbox--bordered' : ''}"
  for="checkbox-{id}">
  <input
    type="checkbox"
    id="checkbox-{id}"
    class="c-checkbox__input"
    bind:checked={isChecked}
    on:change={() => dispatch('change', isChecked)} />
  <span class="c-checkbox__fake" />
</label>
