<script context="module">
  export function preload(res) {
    let doesMatch = false;
    let projects = {
      "dev-profiles": "dev-profiles",
      gastronomical: "gastronomical",
      "game-of-life": "game-of-life",
      portfolio: "portfolio"
    };

    if (projects[res.params.project]) {
      doesMatch = true;
    }

    if (!doesMatch) {
      history.replaceState(null, "", "/projects/unknown");
      return new Promise(function(resolve, reject) {
        resolve({ doesMatch });
      });
    } else {
      return new Promise(function(resolve, reject) {
        resolve({ doesMatch });
      });
    }
  }
</script>

<script>
  import { projectPageData } from "../data/stores.js";
  export let params = {};
</script>

<svelte:head>
  {#if $projectPageData[params.project]}
    <title>{$projectPageData[params.project].name}</title>
  {:else}
    <title>Project Not Found</title>
  {/if}
</svelte:head>

<h1>Hellooooo</h1>
{#if $projectPageData[params.project]}
  <h2>{$projectPageData[params.project].name}</h2>
{:else}
  <h2>Project Not Found</h2>
{/if}

<style>

</style>
