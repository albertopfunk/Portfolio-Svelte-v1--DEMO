<script>
  import { onDestroy } from 'svelte';
  import Navaid from 'navaid';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  let Route;
  let params;

  function renderComponent(component, paramsObj) {
    params = paramsObj || {};
    Route = component.default;
		window.scrollTo(0, 0);
  }

  const router = Navaid("/", paramsObj => import("./pages/NotFoundPage.svelte")
  .then(component => renderComponent(component, paramsObj)))

  router
  .on("/", () => import("./pages/HomePage.svelte")
  .then(renderComponent))

  // have a /projects component that shows all projects in a grid
  router
  .on("/projects/:project", paramsObj => import("./pages/ProjectPage.svelte")
  .then(component => renderComponent(component, paramsObj)))

  router.listen();
  onDestroy(router.unlisten());
</script>


<Header />
<svelte:component this={Route} {params} />
<Footer />


<style>
</style>
