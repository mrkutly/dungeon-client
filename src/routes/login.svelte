<script>
  import { goto, stores } from "@sapper/app";
  import { Adapter, TokenManager } from "../utils";

  const { session } = stores();
  let email;
  let password;
  let error;
  let loading = false;

  const handleSubmit = async () => {
    loading = true;
    error = null;
    const res = await Adapter.login(email, password);

    if (res instanceof Error) {
      error = res.message;
      loading = false;
      return;
    }

    loading = false;
    session.set({ token: res.token });
    TokenManager.setToken(res.token);
    goto("/");
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
