# Button

```svelte
<script lang="ts">
  import Button, { ButtonVariant, ButtonSize } from "@whizzes/exo";

  let type = "button"
  let isLoading = false;
  let disabled = false;
  let variant = ButtonVariant.Primary;
  let size = ButtonSize.Medium;
</script>

<Button
  {type}
  {isLoading}
  {disabled}
  {variant}
  {size}
>
Button
</Button>
```
