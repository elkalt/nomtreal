<script lang="ts">
  import type { ReviewInfo } from "$lib/review-info";

	export let data: { info: ReviewInfo; content: string; };
</script>

<div class="content-container">
  <h1>{data.info.name}</h1>
  <div class="header">
    <p>{new Date(data.info.date).toISOString().split('T')[0]}</p>
    <p>{data.info.rating}/5</p>
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
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1rem;
    }

    :global(h2) {
      padding: 0;
      margin: 0;
    }

    :global(p) {
      padding: 0;
      margin: 0;
      margin-bottom: 1rem;
    }
  }

</style>