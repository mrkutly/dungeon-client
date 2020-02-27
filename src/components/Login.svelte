<script>
  import { goto, stores } from "@sapper/app";
  import { login, TokenManager } from "../utils";

  const { session } = stores();
  let email;
  let password;
  let error;
  let loading = false;

  const handleSubmit = async () => {
    loading = true;
    error = null;
    const response = await login(email, password);

    if (response instanceof Error) {
      error = response.message;
    } else {
      $session.token = response.token;
      goto("/");
    }
  };
</script>

<form method="post" on:submit|preventDefault={handleSubmit}>
  <label>
    Email
    <input name="email" bind:value={email} />
  </label>
  <br />
  <label>
    Password
    <input name="password" type="password" bind:value={password} />
  </label>
  <br />
  <button>Submit</button>
</form>

{#if loading}
  <p>logging in...</p>
{/if}

{#if error}
  <p>{error}</p>
{/if}
