<script>
  export let strength;
  export let dexterity;
  export let constitution;
  export let wisdom;
  export let intelligence;
  export let charisma;
  export let max_hp;
  export let speed;
</script>

<div>
  <label>
    Strength
    <input type="number" min="0" max="20" bind:value={strength} />
  </label>
  <label>
    Dexterity
    <input type="number" min="0" max="20" bind:value={dexterity} />
  </label>
  <label>
    Constitution
    <input type="number" min="0" max="20" bind:value={constitution} />
  </label>
  <label>
    Wisdom
    <input type="number" min="0" max="20" bind:value={wisdom} />
  </label>
  <label>
    Intelligence
    <input type="number" min="0" max="20" bind:value={intelligence} />
  </label>
  <label>
    Charisma
    <input type="number" min="0" max="20" bind:value={charisma} />
  </label>
  <label>
    Max HP
    <input type="number" min="0" max="99" bind:value={max_hp} />
  </label>
  <label>
    Speed
    <input type="number" min="0" max="99" bind:value={speed} />
  </label>
</div>

<style>
  label {
    margin-top: 30px;
    display: block;
    font-size: 1.4rem;
  }
</style>
