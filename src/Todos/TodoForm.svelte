<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onSubmit() {
    dispatch("submit");
  }
</script>

<div class="o-modal">
  <section class="o-modal__wrapper">
    <header class="o-modal-header">
      <h2 class="o-modal-header__title">Add new todo</h2>
      <button class="o-modal-header__close" on:click={() => dispatch('close')}>
        x
      </button>
    </header>

    <form class="o-modal__content" on:submit|preventDefault={onSubmit}>
      <div class="o-form-control">
        <label for="title" class="o-form-control__label">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          class="o-form-control__input" />
      </div>

      <div class="o-form-control">
        <label for="description" class="o-form-control__label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          class="o-form-control__input" />
      </div>

      <div class="o-form-control u-flex-row-ver-center">
        <label for="checkbox" class="o-form-control__label">
          Is task already done?
        </label>
        <input
          type="checkbox"
          id="checkbox"
          name="done"
          class="o-form-control__input" />
      </div>

      <button type="submit" class="o-form__button">Create</button>
    </form>
  </section>
</div>
