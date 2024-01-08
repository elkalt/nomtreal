<script lang="ts">
  import { TagColors, Reviews, Tags } from '$lib/review-info';

  function getColor(tag: string): string {
    if (tag in TagColors) {
      return "var(--t-" + TagColors[tag as keyof typeof TagColors] + ")";
    } else {
      return "var(--t-default)";
    }
  }
</script>

<!-- <div class="filters-container">

</div> -->

<div class="reviews-container">
  {#each Reviews as review}
    <a href={"/reviews/" + review.name.replace(/\s/g, '-').toLowerCase()}>
      <div class="row">
        <div class="title-container">
          <h2>{review.name}</h2>
          <p>{new Date(review.date).toISOString().split('T')[0]}</p>
        </div>
        <div class="tags-container">
          {#each review.tags as tag}
            <div class="tag" style:background-color={getColor(tag)}>{tag}</div>
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

<style lang="scss">
  @import '$lib/app.scss';
  .reviews-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: auto;
    padding: 0.5rem;
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
</style>