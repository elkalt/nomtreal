<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import { derived, writable } from 'svelte/store';
  import { Reviews, getNameURL } from '$lib/review-info';

  let searchVisible = false;
  let reviews = writable(Reviews);
  let searchText = writable("");
  
  let filteredReviews = derived([reviews, searchText], ([$reviews, $searchText]) => {
    if ($searchText.length < 2) return $reviews;
    return $reviews.filter(review => review.name.toLowerCase().includes($searchText.toLowerCase()));
  });
  
  let button: HTMLButtonElement;
  let buttonRect: DOMRect;
  let buttonLeft: number;
  let search: HTMLDivElement;
  let searchRect: DOMRect;
  let searchWidth: number;
  onMount(() => {
		buttonRect = button.getBoundingClientRect();
		window.addEventListener("resize", () => {
			if (button) buttonRect = button.getBoundingClientRect();
      if (search) searchRect = search.getBoundingClientRect();
		});
	});
  $: {
    if (!buttonRect) {
      buttonLeft = 0;
    } else {
      buttonLeft = buttonRect.left;
    }
  }

  $: {
    if (!search) {
      searchWidth = 0;
    } else {
      searchRect = search.getBoundingClientRect();
      searchWidth = searchRect.width;
    }
  }
</script>

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
    {#if searchVisible}
      <div class="search-field" style:left="{buttonLeft - searchWidth}px" bind:this={search}>
        <input type="text" bind:value={$searchText} placeholder="Search articles..." />
        <div class="search-results">
          {#each $filteredReviews as review}
            <a href={`/reviews/${getNameURL(review.name)}`}>{review.name}</a>
          {/each}
          </div>
      </div>
    {/if}
    <button
      class="material-symbols-outlined"
      on:click={() => searchVisible = !searchVisible}
      aria-label="Toggle search"
      bind:this={button}>
      search
    </button>
  </div>
</header>

<slot />

<style lang="scss">
  @import '$lib/app.scss';
  
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;

    .header-element {
      display: flex;
      align-items: center;
      text-align: center;

      .search-field {
        position: absolute;
        width: 15rem;
        z-index: 0;

        input {
          width: 100%;
          padding: 0;
          margin: 0;
          border: none;
          border-bottom: 2px solid black;
          background-color: transparent;
          
          ::placeholder {
            color: black;
          }
        }

        .search-results {
          position: absolute;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: baseline;
          border-top: none;
          background-color: var(--background-color);
        }
      }

      button {
        background-color: transparent;
        border: none;

        &:hover {
          text-shadow: 0px 1px 0px gray;
        }
      }

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