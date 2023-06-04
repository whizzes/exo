<script lang="ts">
  import TextField, { TextFieldVariant } from "./TextField.svelte";
  
  import type { Hst as Histoire } from "@histoire/plugin-svelte";

  export let Hst: Histoire;

  let name = "Name";
  let value = "Hello World";
  let disabled = false;
  let variant = TextFieldVariant.Default;
</script>

<Hst.Story>
  <TextField
    {name}
    {variant}
    {disabled}
    bind:value={value}
  />
  <svelte:fragment slot="controls">
    <Hst.Text bind:value={name} title="Name" />
    <Hst.Text bind:value={value} title="Value" />
    <Hst.Select
      title="Variant"
      bind:value={variant}
      options={Object.values(TextFieldVariant)}
    />
    <Hst.Checkbox bind:value={disabled} title="Disabled" />
  </svelte:fragment>
</Hst.Story>
