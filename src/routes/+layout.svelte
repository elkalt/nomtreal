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
    <h1><a href="/reviews/">NoMtreal</a></h1>
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

      a {
        text-decoration: none;
        color: black;

        &:hover {
          text-shadow: 0px 1px 0px gray;
        }
      }
    }
  }
</style>