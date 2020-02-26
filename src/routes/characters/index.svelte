<script context="module">
  import { Adapter } from "../../utils";

  export async function preload(page, session) {
    const { token } = session;

    try {
      if (!token) {
        this.redirect(302, "login");
        return;
      }

      const characters = await Adapter.getCharacters(token, this.fetch);

      if (characters instanceof Error) {
        throw characters;
      }

      return { characters };
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
