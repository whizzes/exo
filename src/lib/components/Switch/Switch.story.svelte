<script lang="ts">
    import { Switch } from "$lib";

    import type { Hst as Histoire } from "@histoire/plugin-svelte";

    export let Hst: Histoire;

    let id = "switch"
</script>
<Hst.Story>
    <Switch />
</Hst.Story>