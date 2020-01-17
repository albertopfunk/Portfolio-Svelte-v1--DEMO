
<script>
  import {onMount} from 'svelte';

  import SideMenu from '../components/SideMenu.svelte';
  import IntroSection from './sections/IntroSection.svelte';
  import ProjectSection from './sections/ProjectSection.svelte';

  import {projectSectionData} from '../data/stores.js';
 
  // section positions
  let introPos;
  let projectPositions = [];
  let currentSection = 0;

  // keeping track of positions

  // need better math solution for properly keeping track of section positions
  function onInfinite() {
    console.log("=========================CURRENT=========================", currentSection)
    console.log("Intro Pos", introPos.getBoundingClientRect().y);
    console.log("Dev Profiles Section", projectPositions[0].getBoundingClientRect().y);
    console.log("Gastronomical Section", projectPositions[1].getBoundingClientRect().y);
    console.log("Game of Life Section", projectPositions[2].getBoundingClientRect().y);
    console.log("Personal Portfolio Section", projectPositions[3].getBoundingClientRect().y);

    if (
      introPos.getBoundingClientRect().y < 200 &&
      introPos.getBoundingClientRect().y > -10
    ){
      currentSection = 0
    }

    if (
      projectPositions[0].getBoundingClientRect().y < 200 &&
      projectPositions[0].getBoundingClientRect().y > -10
    ){
      currentSection = 1
    }

    if (
      projectPositions[1].getBoundingClientRect().y < 200 &&
      projectPositions[1].getBoundingClientRect().y > -10
    ){
      currentSection = 2
    }

    if (
      projectPositions[2].getBoundingClientRect().y < 200 &&
      projectPositions[2].getBoundingClientRect().y > -10
    ){
      currentSection = 3
    }

    if (
      projectPositions[3].getBoundingClientRect().y < 200 &&
      projectPositions[3].getBoundingClientRect().y > -10
    ){
      currentSection = 4
    }
  }

  onMount(() => {
    console.log("==MOUNT==", $projectSectionData)
    if (
      introPos.getBoundingClientRect().y < 0 &&
      introPos.getBoundingClientRect().y > -943
    ){
      currentSection = 0
    }

    if (
      projectPositions[0].getBoundingClientRect().y < 0 &&
      projectPositions[0].getBoundingClientRect().y > -943
    ){
      currentSection = 1
    }

    if (
      projectPositions[1].getBoundingClientRect().y < 0 &&
      projectPositions[1].getBoundingClientRect().y > -943
    ){
      currentSection = 2
    }

    if (
      projectPositions[2].getBoundingClientRect().y < 0 &&
      projectPositions[2].getBoundingClientRect().y > -943
    ){
      currentSection = 3
    }

    if (
      projectPositions[3].getBoundingClientRect().y < 0 &&
      projectPositions[3].getBoundingClientRect().y > -943
    ){
      currentSection = 4
    }
  });

</script>

<svelte:window on:scroll={onInfinite}/>

<SideMenu {currentSection} />
<main>
  <IntroSection bind:introPos />
  {#each $projectSectionData as project, index}
    <ProjectSection
      name={project.name}
      description={project.description}
      image={project.image}
      slug={project.slug}
      bind:projectPos={projectPositions[index]}
    />
  {/each}
</main>


<style>
</style>