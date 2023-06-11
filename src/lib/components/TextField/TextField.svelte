<script lang="ts" context="module">
  export enum TextFieldVariant {
    Default = "Default",
    Transparent = "Transparent",
  }
</script>

<script lang="ts">
  import classNames from "classnames";
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

  let TEXT_FIELD_INPUT_CLASS: string;

  const TEXT_FIELD_CLASS_NAMES =
    "relative transition-[background-color] transition-[box-shadow] duration-200 h-[44px] min-w-full w-full rounded-md inline-flex";

  const inputContainerClassNames = classNames(
    TEXT_FIELD_CLASS_NAMES,
    !!error && "border-exo-red-base!"
  );

  const dispatch = createEventDispatcher();
  const handleInput = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    value = type.match(/^(number|range)$/) ? +target.value : target.value;
    dispatch("input", {
      value,
    });
  };

  $: {
    TEXT_FIELD_INPUT_CLASS = classNames(
      variant === TextFieldVariant.Default &&
        "border border-exo-grayscale-border focus:ring-exo-blue-base focus:border-exo-blue-base rounded-lg",
      "bg-white text-exo-grayscale-content-2 text-base block w-full p-2.5",
      type === "number" && "font-mono",
      className
    );
  }
</script>

<div class="flex flex-col justify-start no-wrap">
  <label
    for={name}
    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
    hidden={!label}
    >{label}
  </label>
  <div class={inputContainerClassNames}>
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
      class={TEXT_FIELD_INPUT_CLASS}
      on:input={handleInput}
    />
  </div>
  <div
    class:hidden={!error}
    class:flex={!!error}
    class="text-sm text-exo-red-base items-center space-x-2 py-2"
  >
    <span>{error}</span>
  </div>
</div>
