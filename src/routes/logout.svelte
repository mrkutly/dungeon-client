<script>
  import { goto, stores } from "@sapper/app";
  import { TokenManager } from "../utils";

  const { session } = stores();
  session.set({});
  TokenManager.deleteToken();
  let promise = logout();

  async function logout() {
    const result = await fetch("/logout", { method: "DELETE" });
    const parsed = await result.text();
    return parsed;
  }

  goto("/");
</script>

{#await promise}
  <p>Logging you out...</p>
{:then response}
  <p>{response}</p>
{/await}
