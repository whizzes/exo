<script lang="ts">
  import TextField from './TextField.svelte';

  import type { Hst as Histoire } from '@histoire/plugin-svelte';

  export let Hst: Histoire;
</script>

<Hst.Story>
  <TextField />
</Hst.Story>
