<script>
  export let projectPos = 0;

  export let name;
  export let description;
  export let image;
  export let slug;
</script>

<section bind:this={projectPos}>
  <h1>{name}</h1>
  <p>{description}</p>
  <p>{slug}</p>
  <img src={image} alt={slug}>
</section>

<style>
  section {
    height: 100vh;
    width: 100%;
    border: solid;
  }
</style>