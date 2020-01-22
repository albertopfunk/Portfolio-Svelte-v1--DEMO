<script>
  import { onDestroy } from 'svelte';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import Navaid from 'navaid';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  let Route;
  let params;

  function renderComponent(component, paramsObj) {
    params = paramsObj || {};
    if (component.preload) {
      component.preload({params}).then((res) => {
        if (res.doesMatch) {
          Route = component.default;
          window.scrollTo(0, 0);
        }
      })
    } else {
      Route = component.default;
      window.scrollTo(0, 0);
    }
  }

  const router = Navaid("/", paramsObj => import("./pages/NotFound.svelte")
  .then(component => renderComponent(component, paramsObj)))

  router
  .on("/", () => import("./pages/Home.svelte")
  .then(renderComponent))

  router
  .on("/projects", () => import("./pages/ProjectsCollection.svelte")
  .then(renderComponent))

  router
  .on("/projects/unknown", () => import("./pages/NotFound.svelte")
  .then(component => renderComponent(component, "projects/:unknown")))

  router
  .on("/projects/:project", paramsObj => import("./pages/Project.svelte")
  .then(component => renderComponent(component, paramsObj)))

  router.listen();
  onDestroy(router.unlisten);
</script>

<!-- <div transition:slide="{{delay: 450, duration: 450, easing: quintOut }}" /> -->

<Header />
<svelte:component this={Route} {params} />
<Footer />

<style>
</style>
