<script>
  export let projectPos = 0;

  export let name;
  export let description;
  export let image;
  export let slug;
</script>

<section data-section={slug} bind:this={projectPos}>
  <h1>{name}</h1>
  <p>{description}</p>
  <a href="/projects/{slug}">
    <p>{slug}</p>
  </a>
  <img src={image} alt={slug}>
</section>

<style>
  section {
    height: 100vh;
    width: 100%;
    border: solid;
  }
</style>