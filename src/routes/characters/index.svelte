<script context="module">
  import { get } from "../../utils/fetches.js";

  export async function preload(page, session) {
    const { token } = session;

    try {
      if (!token) {
        this.redirect(302, "login");
        return;
      }

      const response = await get("characters", token, this);

      if (response.error) {
        this.error(400, response.error);
      }

      return { characters: response.characters };
    } catch (error) {
      this.error(404, error.message);
    }
  }
</script>

<script>
  import Characters from "../../components/Characters.svelte";
  import Auth from "../../components/Auth.svelte";
  export let characters;
</script>

<Auth>
  <Characters {characters} />
</Auth>
