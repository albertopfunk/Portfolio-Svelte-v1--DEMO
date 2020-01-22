<script>
  import { projectSectionData } from "../data/stores.js";
  import ProjectCard from "../components/ProjectCard.svelte";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>Hellooooo</h1>
{#each $projectSectionData as project}
  <ProjectCard
    name="{project.name}"
    description="{project.description}"
    image="{project.image}"
    slug="{project.slug}"
  />
{/each}

<style>

</style>
