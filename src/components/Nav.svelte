<script>
  export let segment;
  import { stores } from "@sapper/app";

  const { session } = stores();
  $: loggedIn = !!$session.token;
</script>

<nav>
  <ul>
    <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>
    {#if !loggedIn}
      <li>
        <a class:selected={segment === 'login'} href="/login">login</a>
      </li>
    {:else}
      <li>
        <a
          class:selected={segment === 'characters'}
          rel="prefetch"
          href="/characters">
          characters
        </a>
      </li>
      <li>
        <a class:selected={segment === 'logout'} href="/logout">logout</a>
      </li>
    {/if}
  </ul>
</nav>

<style>
  nav {
    border-bottom: 1px solid var(--light-accent);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--accent-color);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
