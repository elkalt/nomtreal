<script lang="ts">
  import { reviews } from '$lib/review-info';
</script>

<div class="reviews-container">
  {#each reviews as review}
    <div class="review">
      <div class="row">
        <h2><a href={"/reviews/" + review.name.replace(/\s/g, '-').toLowerCase()}>{review.name}</a></h2>
        <p>{new Date(review.date).toISOString().split('T')[0]}</p>
      </div>
      <div class="row">
        <p>{review.priceRange[0]} - {review.priceRange[1]}$</p>
        <p>{review.rating}/5</p>
      </div>
    </div>
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

    .review {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 0.1rem;

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