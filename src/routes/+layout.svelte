<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<header>
  <div class="header-element">
    <span class="material-symbols-outlined">
      menu
    </span>
  </div>
  <div class="header-element">
    <h1>NoMtreal</h1>
  </div>
  <div class="header-element">
    <span class="material-symbols-outlined">
      search
    </span>
  </div>
</header>

<slot />

<style lang="scss">
  @import '$lib/app.scss';
  
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .header-element {
      display: flex;
      align-items: center;
      text-align: center;

      .material-symbols-outlined {
        font-variation-settings:
          'FILL' 0,
          'wght' 400,
          'GRAD' 0,
          'opsz' 24;
        cursor: pointer;

        &:hover {
          font-variation-settings:
            'FILL' 0,
            'wght' 700,
            'GRAD' 0,
            'opsz' 24;
        }
      }
    }
  }
</style>