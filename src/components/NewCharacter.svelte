<script>
  import { goto, stores } from "@sapper/app";
  import configs from "../config.js";
  import NameClassRaceForm from "./NameClassRaceForm.svelte";
  import Stats from "./StatsForm.svelte";

  export let races;
  export let classes;

  const { session } = stores();
  const authorization = $session.token;

  let err;
  let name = null;
  let race = null;
  let character_class = null;
  let level = 1;
  let strength = 0;
  let dexterity = 0;
  let constitution = 0;
  let wisdom = 0;
  let intelligence = 0;
  let charisma = 0;
  let max_hp = 0;
  let speed = 0;

  $: stats = [
    strength,
    dexterity,
    constitution,
    wisdom,
    intelligence,
    charisma
  ];

  $: invalidStats = stats.some(n => n < 0 || n > 20);

  $: submitDisabled = !name || !race || !character_class || invalidStats;
  $: characterParams = {
    name,
    race,
    character_class,
    level,
    speed,
    strength,
    dexterity,
    constitution,
    wisdom,
    intelligence,
    charisma,
    max_hp
  };

  const handleSubmit = async () => {
    if (submitDisabled) return;

    try {
      const res = await fetch(`${configs.BACKEND_URL}characters`, {
        method: "POST",
        headers: {
          authorization,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(characterParams)
      });
      const parsed = await res.json();
      if (parsed.error) {
        throw new Error(parsed.error);
      }
      goto(`/characters/${parsed.character.id}`);
    } catch (error) {
      err = error;
    }
  };
</script>

<div class="error-message">
  {#if err}{err}{/if}
</div>
<form on:submit|preventDefault={handleSubmit}>
  <div class="container">
    <NameClassRaceForm
      {races}
      {classes}
      bind:name
      bind:race
      bind:character_class
      bind:level />

    <Stats
      bind:strength
      bind:dexterity
      bind:constitution
      bind:wisdom
      bind:intelligence
      bind:charisma
      bind:max_hp
      bind:speed />
  </div>
  <button type="submit" disabled={submitDisabled}>Save</button>
</form>

<style>
  .container {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .error-message {
    min-height: 2rem;
  }
</style>
