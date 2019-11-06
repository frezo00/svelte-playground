<script>
  export let totalTasks = 0;
  export let doneTasks = 0;
</script>

<header class="c-header">
  <div class="c-header-wrapper o-container">
    <div class="c-header-text">
      <span class="c-header__title">Tuesday</span>
      <small class="c-header__subtitle">November 5th, 2019</small>
    </div>
    <div class="c-header-text u-flex-column-hor-center">
      <span class="c-header__title">{doneTasks}/{totalTasks}</span>
      <small class="c-header__subtitle">done</small>
    </div>
  </div>
</header>
