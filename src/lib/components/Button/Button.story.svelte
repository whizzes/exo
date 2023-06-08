<script lang="ts">
    import { Button, ButtonVariant, ButtonSize } from "$lib";

    import type { Hst as Histoire } from "@histoire/plugin-svelte";

    export let Hst: Histoire;

    let variant = ButtonVariant.Primary;
    let disabled = false;
    let size = ButtonSize.Large;
</script>

<Hst.Story>
    <Button {size} {variant} {disabled}>
      Button
    </Button>
    <svelte:fragment slot="controls">
    <Hst.Select
      title="Variant"
      bind:value={variant}
      options={Object.values(ButtonVariant)}
    />
  </svelte:fragment>
</Hst.Story>
