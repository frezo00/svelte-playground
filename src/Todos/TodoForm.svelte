<script>
  import Checkbox from "../UI/Checkbox.svelte";

  import { createEventDispatcher } from "svelte";
  import { scale, fade } from "svelte/transition";
  import { isRequired } from "../validators";

  const dispatch = createEventDispatcher();

  let title = "";
  let description = "";
  let isChecked = false;

  let isValidForm = true;

  $: console.log("title", title);
  $: console.log("description", description);
  $: console.log("isChecked", isChecked);

  function onSubmit() {
    const formValues = { title, description, isChecked };
    console.log("formValues", formValues);
    dispatch("submit", formValues);
  }

  function validate(value) {
    console.log("onChange", params);
  }
</script>

<div class="o-modal" transition:fade={{ duration: 200 }}>
  <section class="o-modal__wrapper" transition:scale>
    <header class="o-modal-header">
      <h3 class="o-modal-header__title">Add new todo</h3>
    </header>

    <form class="o-modal__content" on:submit|preventDefault={onSubmit}>
      <div class="o-form-control">
        <label for="title" class="o-form-control__label">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          class="o-form-control__input {isRequired(title) ? '' : 'o-form-control__input--error'}"
          bind:value={title}
          on:change={() => isRequired(title)} />
        <small class="o-form-control__error">This field has an error</small>
      </div>

      <div class="o-form-control">
        <label for="description" class="o-form-control__label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          class="o-form-control__input"
          bind:value={description} />
        <small class="o-form-control__error">This field has an error</small>
      </div>

      <div class="o-form-control u-flex-row">
        <label
          for="checkbox-999"
          class="o-form-control__label u-flex-row-ver-center u-padding-b-clear">
          Is task already done?
        </label>
        <Checkbox id={999} isBordered={true} bind:isChecked />
      </div>

      <button type="submit" class="o-form__button" disabled={!isValidForm}>
        Create
      </button>
    </form>
  </section>
</div>
