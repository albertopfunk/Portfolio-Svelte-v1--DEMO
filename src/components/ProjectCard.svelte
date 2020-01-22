<script>
  export let name;
  export let description;
  export let image;
  export let slug;
</script>

<article>
  <h1>{name}</h1>
  <p>{description}</p>
  <a href="/projects/{slug}">
    <p>{slug}</p>
  </a>
  <img src={image} alt={slug}>
</article>

<style>
  article {
    height: 500px;
    width: 650px;
    border: solid;
    margin: 20px;
  }
  img {
    width: 200px;
  }
</style>
