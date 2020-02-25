<script>
  import Nav from "../components/Nav.svelte";
  import AutoLogin from "../components/AutoLogin.svelte";
  export let segment;
</script>

<AutoLogin>
  <Nav {segment} />

  <main>
    <slot />
  </main>
</AutoLogin>

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
