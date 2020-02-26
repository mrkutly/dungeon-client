<script context="module">
  import configs from "../../config";
  const { BACKEND_URL } = configs;

  export async function preload(page, session) {
    const { id } = page.params;
    const authorization = session.token;
    let character;

    if (!authorization) {
      this.redirect(302, "login");
    }

    if (authorization) {
      const response = await this.fetch(`${BACKEND_URL}characters/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization
        }
      });

      const parsed = await response.json();

      if (parsed.error) {
        this.error(response.status, parsed.error);
      }

      character = parsed.character;
    }

    return { character };
  }
</script>

<script>
  import Auth from "../../components/Auth.svelte";
  export let character;
</script>

<Auth>
  <p>hello {character.name}</p>
</Auth>
