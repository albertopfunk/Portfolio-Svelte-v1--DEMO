
<script>
  export let introPos = 0
</script>


<section bind:this={introPos}>
  <h1>Hello Intro</h1>
</section>

<style>
  section {
    height: 700px;
    width: 800px;
    border: solid;
  }
</style>