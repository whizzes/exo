<script lang="ts">
    import { Button, ButtonStyle, ButtonSize, ButtonType } from "$lib";

    import type { Hst as Histoire } from "@histoire/plugin-svelte";

    export let Hst: Histoire;

    let style = ButtonStyle.Primary;
    let size = ButtonSize.Large;
    let type = ButtonType.Default
    let disabled = false;
</script>

<Hst.Story>
    <Button {type} {size} {style} {disabled}>
      Button
    </Button>
    <svelte:fragment slot="controls">
    <Hst.Select
      title="Style"
      bind:value={style}
      options={Object.values(ButtonStyle)}
    />
    <Hst.Select
      title="Size"
      bind:value={size}
      options={Object.values(ButtonSize)}
    />
    <Hst.Select
    title="Type"
    bind:value={type}
    options={Object.values(ButtonType)}
  />
    <Hst.Checkbox bind:value={disabled} title="Disabled" />
  </svelte:fragment>
</Hst.Story>
