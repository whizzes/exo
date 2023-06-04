# Text Field

```svelte
<script lang="ts">
  import TextField, { TextFieldVariant } from "@whizzes/exo";

  let name = "Name";
  let value = "Hello World";
  let disabled = false;
  let variant = TextFieldVariant.Default;
</script>

<TextField
  {name}
  {variant}
  {disabled}
  bind:value={value}
/>
```
