# Button

```svelte
<script lang="ts">
  import Button, { ButtonStyle, ButtonSize, ButtonType } from "@whizzes/exo";

  let style = ButtonStyle.Primary;
  let size = ButtonSize.Medium;
  let btnType = ButtonType.Default;
  let disabled = false;
  let isLoading = false;
</script>

<Button
  {style}
  {size}
  {btnType}
  {isLoading}
  {disabled}
>
Button
</Button>
```
