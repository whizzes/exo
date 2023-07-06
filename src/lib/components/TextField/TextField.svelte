<script lang="ts" context="module">
  export enum TextFieldVariant {
    Default = "Default",
    Transparent = "Transparent",
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let autoComplete: string | undefined = undefined;
  export let error: string | undefined = undefined;
  export let label: string | undefined = undefined;
  export let name: string;
  export let placeholder: string | undefined = undefined;
  export let tabIndex: number | undefined = undefined;
  export let type: "text" | "email" | "tel" | "password" | "number" = "text";
  export let required = false;
  export let step: string | undefined = undefined;
  export let value: string | number | undefined;
  export let variant: TextFieldVariant = TextFieldVariant.Default;
  export let disabled = false;
  export let className = "";
  export { className as class };

  const dispatch = createEventDispatcher();
  const handleInput = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    value = type.match(/^(number|range)$/) ? +target.value : target.value;
    dispatch("input", {
      value,
    });
  };
</script>

<div class="flex flex-col justify-start">
  <label
    for={name}
    class="mb-2 text-base font-medium text-exo-grayscale-content-2"
    hidden={!label}
    >{label}
  </label>
  <div>
    <input
      {name}
      {type}
      {value}
      {required}
      {placeholder}
      {disabled}
      {step}
      id={name}
      data-testid="text_field-{name}"
      autocomplete={autoComplete}
      tabindex={tabIndex}
      aria-invalid="false"
      aria-label="{name}-input"
      aria-required={required ? "true" : "false"}
      class={className}
      class:base={true}
      class:error={!!error}
      class:variant_default={variant === TextFieldVariant.Default}
      class:variant_transparent={variant === TextFieldVariant.Transparent}
      class:font-mono={type === "number"}
      class:disabled={disabled}
      on:input={handleInput}
    />
  </div>
  <div
    class:hidden={!error}
    class="flex text-sm text-exo-red-base items-center space-x-2 py-2"
  >
    <span>{error}</span>
  </div>
</div>

<style lang="postcss">
  .base {
    @apply transition-[background-color];
    @apply transition-[box-shadow] duration-200;
    @apply rounded-md inline-flex bg-white text-exo-grayscale-content-2;
    @apply block w-full p-2;
  }

  .variant_default {
    @apply border focus:border-exo-blue-base focus:shadow-[0_0_5px_1px_rgba(0,0,0,38)] focus:shadow-exo-blue-base/40 border-exo-grayscale-border outline-none rounded-lg;
  }


  .variant_transparent {
    @apply border border-exo-grayscale-border outline-none rounded-lg;
  }

  .variant_transparent:focus {
    @apply border-exo-blue-base;
  }

  .error {
    @apply border focus:border-exo-red-base focus:shadow-[0_0_5px_1px_rgba(0,0,0,38)] focus:shadow-exo-red-base/40 border-exo-red-base;
  }

  .disabled {
    @apply cursor-not-allowed opacity-40 bg-exo-grayscale-content-1;
  }
</style>
