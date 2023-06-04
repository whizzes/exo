<script lang="ts" context="module">
  export enum TextInputVariant {
    Default,
    Transparent
  }
</script>

<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher } from 'svelte';

  // import Warning from '~icons/custom/warning';

  export let autoComplete: string | undefined = undefined;
  export let error: string | undefined = undefined;
  export let label: string | undefined = undefined;
  export let name: string;
  export let placeholder: string | undefined = undefined;
  export let tabIndex: number | undefined = undefined;
  export let type: 'text' | 'email' | 'tel' | 'password' | 'number' = 'text';
  export let required = false;
  export let step: string | undefined = undefined;
  export let value: string | number | undefined;
  export let variant: TextInputVariant = TextInputVariant.Default;
  export let disabled = false;
  export let className = '';
  export let icon: any = undefined;
  export { className as class };

  const dispatch = createEventDispatcher();
  const TEXT_FIELD_INPUT_CLASS = classNames(
    variant === TextInputVariant.Default &&
      'border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg',
    'bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    type === 'number' && 'font-mono',
    className
  );

  const TEXT_FIELD_CLASS_NAMES =
    'relative transition-[background-color] transition-[box-shadow] duration-200 h-[44px] min-w-full w-full rounded-md inline-flex';

  const inputContainerClassNames = classNames(
    TEXT_FIELD_CLASS_NAMES,
    !!error && 'border-rose-200!'
  );

  const handleInput = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    value = type.match(/^(number|range)$/) ? +target.value : target.value;
    dispatch('input', {
      value
    });
  };

  const handleIconClick = (): void => {
    dispatch('clickIcon');
  };
</script>

<div class="flex flex-col justify-start no-wrap">
  <label for={name} class="mb-2 text-sm font-medium text-gray-900 dark:text-white" hidden={!label}
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
      autocomplete={autoComplete}
      tabindex={tabIndex}
      aria-invalid="false"
      aria-label="{name}-input"
      aria-required={required ? 'true' : 'false'}
      class={TEXT_FIELD_INPUT_CLASS}
      on:input={handleInput}
    />
    {#if icon}
      <div on:mousedown={handleIconClick}>
        <svelte:component
          this={icon}
          class="absolute h-8 w-8 inset-y-0 right-0 pt-2 pr-2 flex items-center leading-5"
        />
      </div>
    {/if}
  </div>
  <div
    class:hidden={!error}
    class:flex={!!error}
    class="text-sm text-rose-500 items-center space-x-2 py-2"
  >
    <figure class="flex justify-center items-center">
      <!-- <Warning /> -->
    </figure>
    <span>{error}</span>
  </div>
</div>
