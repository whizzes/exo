<script lang="ts">
  import { TextField, TextFieldVariant } from "$lib";

  import type { Hst as Histoire } from "@histoire/plugin-svelte";

  export let Hst: Histoire;

  let name = "Name";
  let label = "Label"
  let value = "Hello World";
  let placeholder = "Enter your first name";
  let variant = TextFieldVariant.Default;
  let disabled = false;
  let _type: "text" | "email" | "tel" | "password" | "number" = "text";
  let error = "";
</script>

<Hst.Story>
  <TextField
    {name}
    {label}
    {error}
    {variant}
    {disabled}
    type={_type}
    {placeholder}
    bind:value={value}
  />
  <svelte:fragment slot="controls">
    <Hst.Text bind:value={name} title="Name" />
    <Hst.Text bind:value={label} title="Label" />
    <Hst.Text bind:value={value} title="Value" />
    <Hst.Text bind:value={placeholder} title="Placeholder" />
    <Hst.Text bind:value={error} title="Error Alert" />
    <Hst.Select
      title="Variant"
      bind:value={variant}
      options={Object.values(TextFieldVariant)}
    />
    <Hst.Select
      title="Type"
      bind:value={_type}
      options={['text', 'email', 'tel', 'password', 'number']}
    />
    <Hst.Checkbox bind:value={disabled} title="Disabled" />
  </svelte:fragment>
</Hst.Story>
