<script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";
  import { TokenManager } from "../utils";

  const { session } = stores();
  $: loggedIn = !!$session.token;

  onMount(() => {
    if (!loggedIn) {
      let token = TokenManager.getToken();

      if (token !== null) {
        session.set({ token });
      }
    }
  });
</script>

<slot />
