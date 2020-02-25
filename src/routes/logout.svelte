<script>
  import { goto, stores } from "@sapper/app";
  import { TokenManager } from "../utils";

  const { session } = stores();
  session.set({});
  TokenManager.deleteToken();

  goto("/");
</script>

<p>Logging you out...</p>
