<script>
  import {onMount} from 'svelte';
  export let projectPos = 0;

  export let name;
  export let description;
  export let image;
  export let slug;
</script>

<section bind:this={projectPos}>
  <h1>{name}</h1>
  <p>{description}</p>
</section>

<style>
  section {
    height: 700px;
    width: 800px;
    border: solid;
  }
</style>