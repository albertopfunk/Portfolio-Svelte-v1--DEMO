<script>
  export let currentSection;
  export let scrollToSection;
</script>

<aside>
  <ul>
    <li
      on:click="{scrollToSection('intro')}"
      class="{currentSection === 0 ? 'active' : ''}"
    >
      o
    </li>
    <li
      on:click="{scrollToSection('dev-profiles')}"
      class="{currentSection === 1 ? 'active' : ''}"
    >
      o
    </li>
    <li
      on:click="{scrollToSection('gastronomical')}"
      class="{currentSection === 2 ? 'active' : ''}"
    >
      o
    </li>
    <li
      on:click="{scrollToSection('game-of-life')}"
      class="{currentSection === 3 ? 'active' : ''}"
    >
      o
    </li>
    <li
      on:click="{scrollToSection('portfolio')}"
      class="{currentSection === 4 ? 'active' : ''}"
    >
      o
    </li>
    <li
      on:click="{scrollToSection('contact')}"
      class="{currentSection === 5 ? 'active' : ''}"
    >
      o
    </li>
  </ul>
</aside>

<style>
  aside {
    position: fixed;
    top: 50%;
    right: 2%;
    z-index: 30;
  }
  .active {
    border: solid;
  }
</style>
