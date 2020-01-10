<script>
  import {onMount} from 'svelte';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import SideMenu from './SideMenu.svelte';
  import IntroSection from './IntroSection.svelte';
  import ProjectSection from './ProjectSection.svelte';
  import ProjectPage from './ProjectPage.svelte';

  import {projectData} from './stores.js';

  export let url = "";

  // section positions
  let introPos;
  let projectPositions = [];
  let currentSection = 0;

  // keeping track of positions
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
    console.log("==MOUNT==", $projectData)
    window.addEventListener("scroll", onInfinite);
    return () => {
      window.removeEventListener("scroll", onInfinite);
    };
	});
</script>


<Header />
<SideMenu {currentSection} />
<main>
  <IntroSection bind:introPos />
  {#each $projectData as project, index}
    <ProjectSection
      name={project.name}
      description={project.description}
      image={project.image}
      slug={project.slug}
      bind:projectPos={projectPositions[index]}
    />
  {/each}
</main>
<Footer />


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

  section {
    height: 700px;
    width: 800px;
    border: solid;
  }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>