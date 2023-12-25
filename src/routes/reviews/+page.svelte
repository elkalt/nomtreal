<script lang="ts">
  import { reviews } from '$lib/review-info';
</script>

<div class="reviews-container">
  {#each reviews as review}
    <a href={"/reviews/" + review.name.replace(/\s/g, '-').toLowerCase()}>
      <div class="row">
        <h2>{review.name}</h2>
        <p>{new Date(review.date).toISOString().split('T')[0]}</p>
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
        text-shadow: 0px 1px 0px gray;
      }

      .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
    }
  }
</style>