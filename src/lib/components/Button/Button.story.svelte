<script lang="ts">
    import { Button, ButtonStyle, ButtonSize, ButtonType } from "$lib";

    import type { Hst as Histoire } from "@histoire/plugin-svelte";

    export let Hst: Histoire;

    let label = "Click me!";
    let style = ButtonStyle.Primary;
    let size = ButtonSize.Large;
    let btnType = ButtonType.Default
    let disabled = false;
</script>

<Hst.Story>
    <Button
      {btnType}
      {size}
      {style}
      {disabled}
      {label}
    />
    <svelte:fragment slot="controls">
      <Hst.Text bind:value={label} title="Label" />
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
        bind:value={btnType}
        options={Object.values(ButtonType)}
      />
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
  </svelte:fragment>
</Hst.Story>
