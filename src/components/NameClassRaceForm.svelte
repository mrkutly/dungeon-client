<script>
  export let name;
  export let race;
  export let races;
  export let classes;
  export let character_class;
  export let level;
</script>

<div>
  <label>
    Character's name:
    <input type="text" name="character-name" bind:value={name} />
  </label>

  <label>
    Level:
    <input type="number" min="0" max="99" bind:value={level} />
  </label>

  <label>
    Race:
    <select bind:value={race}>
      <option />
      {#each races as race}
        <option value={race.id}>{race.name}</option>
      {/each}
    </select>
  </label>

  <label>
    Class:
    <select bind:value={character_class}>
      <option />
      {#each classes as _class}
        <option value={_class.id}>{_class.name}</option>
      {/each}
    </select>
  </label>
</div>

<style>
  label {
    margin-top: 30px;
    display: block;
    font-size: 1.4rem;
  }
</style>
