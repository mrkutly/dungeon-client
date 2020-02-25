<script>
  import { stores, goto } from "@sapper/app";
  import { onMount } from "svelte";
  import { TokenManager } from "../utils";

  const { session } = stores();
  $: loggedIn = !!$session.token;

  onMount(() => {
    if (!loggedIn) {
      let token = TokenManager.getToken();

      if (token !== null) {
        $session.token = token;
      } else {
        goto("/login");
      }
    }
  });
</script>

{#if loggedIn}
  <slot />
{:else}
  <p>loading...</p>
{/if}
