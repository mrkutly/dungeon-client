<script>
  import { stores } from "@sapper/app";
  import { Adapter } from "../utils";
  import { characters } from "../stores.js";

  const { session } = stores();
  const promise = getCharacters();

  async function getCharacters() {
    if ($characters !== null) return $characters;
    const chars = await Adapter.getCharacters($session.token);
    console.log(chars);
    $characters = chars;
    return chars;
  }
</script>

{#await promise}
  <p>getting your characters...</p>
{:then characters}
  <ul>
    {#each characters as char}
      <li>
        <a rel="prefetch" href="/characters/{char.id}">
          {char.name}, level {char.level} {char.race.name}
          {char.character_class.name}
        </a>
      </li>
    {/each}
  </ul>
{:catch}
  <p>error</p>
{/await}
