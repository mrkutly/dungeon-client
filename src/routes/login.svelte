<script>
  import Login from "../components/Login.svelte";
  import Signup from "../components/Signup.svelte";
</script>

<div class="container">
  <div>
    <h1>Login</h1>
    <Login />
  </div>
  <div>
    <h1>Sign up</h1>
    <Signup />
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }

  @media (max-width: 690px) {
    .container div:first-of-type {
      padding-bottom: 40px;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--light-accent);
    }
  }
</style>
