<script>
  import { onMount } from "svelte";
  import SideMenu from "../components/SideMenu.svelte";
  import IntroSection from "./sections/IntroSection.svelte";
  import ProjectSection from "./sections/ProjectSection.svelte";
  import ContactSection from "./sections/ContactSection.svelte";

  import { projectSectionData } from "../data/stores.js";

  let currentSection = 0;
  let introPos;
  let contactPos;
  let projectPositions = [];

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };

  let observer = new IntersectionObserver(onIntersection, options);

  onMount(() => {
    observer.observe(introPos);
    projectPositions.forEach(project => observer.observe(project));
    observer.observe(contactPos);
  });

  function onIntersection(entries, observer) {
    let current = entries.filter(entry => entry.isIntersecting);

    if (current.length > 0) {
      current = current[0].target.dataset.section;

      switch (current) {
        case "intro":
          currentSection = 0;
          break;
        case "dev-profiles":
          currentSection = 1;
          break;
        case "gastronomical":
          currentSection = 2;
          break;
        case "game-of-life":
          currentSection = 3;
          break;
        case "portfolio":
          currentSection = 4;
          break;
        case "contact":
          currentSection = 5;
          break;
        default:
          return;
      }
    }
  }

  function scrollToSection(section) {
    switch (section) {
      case "intro":
        introPos.scrollIntoView({ behavior: "smooth" });
        break;
      case "dev-profiles":
        projectPositions[0].scrollIntoView({ behavior: "smooth" });
        break;
      case "gastronomical":
        projectPositions[1].scrollIntoView({ behavior: "smooth" });
        break;
      case "game-of-life":
        projectPositions[2].scrollIntoView({ behavior: "smooth" });
        break;
      case "portfolio":
        projectPositions[3].scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactPos.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        return;
    }
  }
</script>

<svelte:head>
  <title>Alberto | Front-End Developer</title>
</svelte:head>
<SideMenu {currentSection} {scrollToSection} />
<IntroSection bind:introPos />
{#each $projectSectionData as project, index}
  <ProjectSection
    name="{project.name}"
    description="{project.description}"
    image="{project.image}"
    slug="{project.slug}"
    bind:projectPos="{projectPositions[index]}"
  />
{/each}
<ContactSection bind:contactPos />

<style>

</style>
