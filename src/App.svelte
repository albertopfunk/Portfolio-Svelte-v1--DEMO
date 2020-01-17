<script>
  import { onDestroy } from 'svelte';
  import Navaid from 'navaid';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  import HomePage from './pages/HomePage.svelte';
  import ProjectPage from './pages/ProjectPage.svelte';

  // let Route;
  // let params;

  // function renderComponent(component, paramObj) {

  // }

  // const router = Navaid("/")
  // .on("/", () => import("./pages/HomePage.svelte").then(renderComponent))
  // .listen();

  // onDestroy(router.unlisten());
</script>


<Header />

<HomePage />

<Footer />


<style>
</style>
