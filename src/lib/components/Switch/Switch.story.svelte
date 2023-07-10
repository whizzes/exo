<script lang="ts">
    import { Switch } from "$lib";

    import type { Hst as Histoire } from "@histoire/plugin-svelte";

    export let Hst: Histoire;

    let disabled = false;
</script>
<Hst.Story>
    <Switch 
     {disabled}
    />
    <svelte:fragment slot="controls">
        <Hst.Checkbox bind:value={disabled} title="Disabled" />
    </svelte:fragment>
</Hst.Story>