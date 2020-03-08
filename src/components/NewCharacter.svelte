<script>
  import { goto } from "@sapper/app";
  import { newName, newRace, newClass } from "../stores.js";
  export let races;
  export let classes;

  $: submitDisabled = !$newName || !$newRace || !$newClass;

  const handleSubmit = () => {
    goto("/characters/new/features");
  };
</script>

<form on:submit|preventDefault={handleSubmit} aria-disabled={submitDisabled}>
  <label>
    Character's name:
    <input type="text" name="character-name" bind:value={$newName} />
  </label>

  <label>
    Race:
    <select bind:value={$newRace}>
      <option />
      {#each races as race}
        <option value={race.id}>{race.name}</option>
      {/each}
    </select>
  </label>

  <label>
    Class:
    <select bind:value={$newClass}>
      <option />
      {#each classes as _class}
        <option value={_class.id}>{_class.name}</option>
      {/each}
    </select>
  </label>

  <button on:click={handleSubmit} type="submit" disabled={submitDisabled}>
    Next
  </button>
</form>

<style>
  label {
    margin-top: 30px;
    display: block;
    font-size: 1.4rem;
  }
</style>
