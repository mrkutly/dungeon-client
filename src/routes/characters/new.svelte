<script context="module">
  import configs from "../../config";
  const { BACKEND_URL } = configs;

  export async function preload(page, session) {
    try {
      const raceResp = await this.fetch(`${BACKEND_URL}races`);
      const classResp = await this.fetch(`${BACKEND_URL}character_classes`);

      const races = (await raceResp.json()).races;
      const classes = (await classResp.json()).character_classes;

      return {
        races,
        classes
      };
    } catch (error) {
      this.error(400, "There was a connections issue.");
    }
  }
</script>

<script>
  import NewCharacter from "../../components/NewCharacter.svelte";
  export let races;
  export let classes;
</script>

<NewCharacter {races} {classes} />
