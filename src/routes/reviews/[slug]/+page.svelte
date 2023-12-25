<script lang="ts">
  import type { ReviewInfo } from "$lib/review-info";

	export let data: { info: ReviewInfo; content: string; };
</script>

<div class="content-container">
  <div class="header">
    <div class="row">
      <h1>{data.info.name}</h1>
      <span class="material-symbols-outlined"><a href={data.info.location}>pin_drop</a></span>
    </div>
    <div class="row">
      <p>{new Date(data.info.date).toISOString().split('T')[0]}</p>
      <p>{data.info.rating}/5</p>
    </div>
  </div>

  <div>
    {@html data.content}
  </div>
</div>

<style lang="scss">
  @import '$lib/app.scss';

  .content-container {
    align-items: baseline;
    justify-content: center;
    width: 40%;
    margin: auto;
    padding: 0.5rem;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 0.1rem;
      margin-bottom: 1rem;

      .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
  
        a {
          text-decoration: none;
          color: black;
          margin: 0;
          padding: 0;
        }

        p {
          margin-bottom: 0;
        }
      }
    }

    :global(p) {
      padding: 0;
      margin: 0;
      margin-bottom: 1rem;
    }
  }

</style>