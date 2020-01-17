<script>
  export let currentSection;
</script>

<aside>
  <ul>
    <li class="{currentSection === 0 ? 'active' : ''}">1</li>
    <li class="{currentSection === 1 ? 'active' : ''}">2</li>
    <li class="{currentSection === 2 ? 'active' : ''}">3</li>
    <li class="{currentSection === 3 ? 'active' : ''}">4</li>
    <li class="{currentSection === 4 ? 'active' : ''}">5</li>
  </ul>
</aside>

<style>
  aside {
    position: fixed;
    top: 50%;
    right: 2%;
  }
  .active {
    border: solid;
  }
</style>