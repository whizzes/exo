<script lang="ts">
  import Counter from '$lib/components/Counter.svelte';

  import type { Hst as Histoire } from '@histoire/plugin-svelte';

  export let Hst: Histoire;
</script>

<Hst.Story>
  <Counter />
</Hst.Story>
