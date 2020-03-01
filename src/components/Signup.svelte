<script>
  import { goto, stores } from "@sapper/app";
  import { signup, TokenManager } from "../utils";

  const { session } = stores();

  let email;
  let password;
  let confirmPassword;
  let error;
  let loading = false;

  const handleSubmit = async () => {
    error = null;

    if (password !== confirmPassword) {
      error = "Passwords do not match.";
    }
    loading = true;
    const response = await signup(email, password);

    if (response instanceof Error) {
      error = response.message;
      loading = false;
      return;
    }

    session.set({ token: response.token });
    TokenManager.setToken(response.token);
    goto("/");
  };
</script>

<form method="post" on:submit|preventDefault={handleSubmit}>
  <label>
    Email
    <input name="email" type="email" bind:value={email} />
  </label>
  <br />
  <label>
    Password
    <input name="password" type="password" bind:value={password} />
  </label>
  <br />
  <label>
    Confirm Password
    <input
      name="password-confirmation"
      type="password"
      bind:value={confirmPassword} />
  </label>
  <br />
  <button type="submit">Submit</button>
</form>

{#if loading}
  <p>creating account...</p>
{/if}

{#if error}
  <p>{error}</p>
{/if}
