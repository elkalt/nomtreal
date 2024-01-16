<script lang="ts">
  import { getTagColor, Reviews, Tags, getNameURL } from '$lib/review-info';

  let reviews = [...Reviews];

  const meals = [Tags.BREAKFAST, Tags.BRUNCH, Tags.LUNCH, Tags.DINNER];
  const cuisines = Object.values(Tags).filter(v => !meals.includes(v));
  let filters: string[] = [];
  
  function toggleFilter(filter: string): void {
    if (filters.includes(filter)) {
      filters = filters.filter(f => f !== filter);
    } else {
      filters.push(filter);
    }
    filters = [...filters];
    reviews = Reviews.filter(r => filters.every(f => r.tags.includes(f)));
  }

  enum sortTypes {
    PRICE = "Avg. Price",
    RATING = "Rating",
    DATE = "Date"
  }
  let sorts: Record<sortTypes, boolean> = Object.values(sortTypes).reduce((acc, val) =>
  ({ ...acc, [val]: false }), {} as Record<sortTypes, boolean>);
  let currentSort: sortTypes = sortTypes.DATE;
  sorts[currentSort] = true;

  function sortReviews() {
    reviews = reviews.sort((a, b) => {
      let comparison = 0;
      switch (currentSort) {
        case sortTypes.PRICE:
          comparison = (a.priceRange[0] + a.priceRange[1])/2 - (b.priceRange[0] + b.priceRange[1])/2;
          break;
        case sortTypes.RATING:
          comparison = a.rating - b.rating;
          break;
        case sortTypes.DATE:
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
      }
      return sorts[currentSort] ? comparison : -comparison;
    });
  }

  function toSortType(sort: string): sortTypes | null {
    return Object.values(sortTypes).includes(sort as sortTypes) ? sort as sortTypes : null;
  }

  function changeSort(sort: sortTypes) {
    if (currentSort === sort) {
      sorts[sort] = !sorts[sort];
    } else {
      currentSort = sort;
      sorts[sort] = true;
    }
    sortReviews();
  }
</script>


<div class="content-container">
  <div class="search-container">
    <div class="sort-container">
      {#each Object.keys(sorts) as sort}
        {@const sortType = toSortType(sort)}
        {#if sortType}
          <button class="sort"
            on:click={() => changeSort(sortType)}
            on:keydown={(event) => ['Enter', ' '].includes(event.key) && changeSort(sortType)}
            style:border-bottom={currentSort === sortType ? "1px solid black" : ""}>
            {sort} <span style:font-size="large">{(sortType === currentSort ? (sorts[sortType] ? "↓" : "↑") : "↕")}</span>
          </button>
        {/if}
      {/each}
    </div>
    <div class="filter-container">
      <span style:font-weight="700">Meal:</span>
      {#each meals as meal}
        <button class="filter" on:click={() => toggleFilter(meal)}>
          <div class="indicator" style:background-color={filters.includes(meal) ? getTagColor(meal) : "transparent"}></div>
          {meal}
        </button>
      {/each}
    </div>
    <div class="filter-container">
      <span style:font-weight="700">Cuisine:</span>
      {#each cuisines as cuisine}
        <button class="filter" on:click={() => toggleFilter(cuisine)}>
          <div class="indicator" style:background-color={filters.includes(cuisine) ? getTagColor(cuisine) : "transparent"}></div>
          {cuisine}
        </button>
      {/each}
    </div>
  </div>
  
  <div class="reviews-container">
    {#each reviews as review}
      <a href={"/reviews/" + getNameURL(review.name)}>
        <div class="row">
          <div class="title-container">
            <h2>{review.name}</h2>
            <p>{new Date(review.date).toISOString().split('T')[0]}</p>
          </div>
          <div class="tags-container">
            {#each review.tags as tag}
              <div class="tag" style:background-color={getTagColor(tag)}>{tag}</div>
            {/each}
          </div>
        </div>
        <div class="row">
          <p>{review.priceRange[0]} - {review.priceRange[1]}$</p>
          <p>{review.rating}/5</p>
        </div>
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  @import '$lib/app.scss';
  .content-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 1rem;
    padding: 0.5rem;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    .search-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .filter-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        @media (max-width: 768px) {
          flex-direction: row;
        }

        .filter {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.25rem;
          background-color: transparent;
          border: none;
          cursor: pointer;
          width: fit-content;

          .indicator {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 33%;
            border: 1px solid black;
          }
        }
      }

      .sort-container {
        display: flex;
        flex-direction: row;
        align-items: center;

        @media (max-width: 768px) {
          justify-content: center;
        }

        .sort {
          background-color: transparent;
          gap: 0.25rem;
          border: none; 
          cursor: pointer;
        }
      }
    }

    .reviews-container {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      width: 100%;
      margin: auto;
      gap: 1rem;
  
      @media (max-width: 768px) {
        width: 100%;
      }
  
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 0.1rem;
  
        text-decoration: none;
        color: black;
  
        text-decoration: none;
        color: black;
  
        &:hover {
          text-shadow: 0px 1px 0px black;
        }
  
        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
  
          .title-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: baseline;
            gap: 0.25rem;
  
            p {
              font-size: 0.8rem;
              color: rgb(75, 75, 75);
            }
          }
  
          .tags-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 0.25rem;
  
            .tag {
              padding: 0.25rem;
              border-radius: 0.5rem;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }

</style>