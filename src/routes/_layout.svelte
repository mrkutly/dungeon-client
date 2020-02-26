<script>
  import Nav from "../components/Nav.svelte";
  import LoginOnLoad from "../components/LoginOnLoad.svelte";
  export let segment;
</script>

<LoginOnLoad>
  <Nav {segment} />

  <main>
    <slot />
  </main>
</LoginOnLoad>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
