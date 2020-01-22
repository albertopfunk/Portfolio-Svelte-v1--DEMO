<svelte:head>
  {#if $projectPageData[params.project]}
	  <title>{$projectPageData[params.project].name}</title>
  {:else}
    <title>Project Not Found</title>
  {/if}
</svelte:head>

<script>
  import { onMount } from 'svelte'
  import {projectPageData} from '../data/stores.js';

  export let params = {};

  // possible preload
  onMount(() => {
    let doesMatch = false
    for (let project in $projectPageData) {
      if (params.project === project) {
        doesMatch = true
      }
    }
    if (!doesMatch) {
      history.replaceState(null, "", "/projects/unknown")
    }
  })
</script>

<h1>Hellooooo</h1>
{#if $projectPageData[params.project]}
	<h2>{$projectPageData[params.project].name}</h2>
{:else}
	<h2>Project Not Found</h2>
{/if}

<style>
</style>