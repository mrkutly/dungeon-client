<script>
  export let characters = [];
</script>

{#if characters.length === 0}
  <p>
    You haven't created any characters yet. Go
    <a href="/characters/new">here</a>
    to get started
  </p>
{:else}
  <ul>
    {#each characters as char}
      <li>
        <a href="/characters/{char.id}">
          {char.name}, level {char.level} {char.race.name}
          {char.character_class.name}
        </a>
      </li>
    {/each}
  </ul>
{/if}
