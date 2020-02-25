<script>
  import { stores } from "@sapper/app";
  import { Adapter } from "../utils";
  import { characters } from "../stores.js";

  const { session } = stores();
  const promise = getCharacters();

  async function getCharacters() {
    if ($characters !== null) return $characters;
    const chars = await Adapter.getCharacters($session.token);
    $characters = chars;
    return chars;
  }
</script>

{#await promise}
  <p>getting your characters</p>
{:then characters}
  {#each characters as char}
    {console.log(char)}
    <li>{char.name}</li>
  {/each}
{:catch}
  <p>error</p>
{/await}
