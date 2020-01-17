<script>
  import {projectPageData} from '../data/stores.js';

  export let params = {};
  // need to redirect if :name does not match
</script>

<h1>Hellooooo</h1>
<h2>{$projectPageData[params.project].name}</h2>

<style>
</style>