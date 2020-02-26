<script>
  export let characters = [];
</script>

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
