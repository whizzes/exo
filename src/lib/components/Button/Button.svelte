<script lang="ts" context="module">
    export enum ButtonVariant {
        Primary = "Primary",
        Secondary = "Secondary",
        Danger = "Danger",
    }

    export enum ButtonSize {
        Large = "Large",
        Medium = "Medium",
        Small = "Small",
    }
</script>

<script lang="ts">
    import classNames from "classnames";

    export let type: "button" | "submit" = "button";
    export let variant: ButtonVariant = ButtonVariant.Primary;
    export let size: ButtonSize = ButtonSize.Medium;
    export let isLoading = false;
    export let disabled = false;
    export let icon: any = null;
    export let className = "";
    export { className as class };

    let BUTTON_CLASS: string;

    export const PRIMARY_BUTTON_CLASSES =
        "border border-exo-blue-border bg-exo-blue-base text-white hover:bg-exo-blue-hover disabled:bg-exo-blue-pressed";
    export const SECONDARY_BUTTON_CLASSES =
        "border border-exo-grayscale-border bg-white text-exo-black hover:bg-exo-grayscale-base disabled:text-exo-grayscale-pressed";
    export const DANGER_BUTTON_CLASSES =
        "border border-exo-red-border bg-exo-red-base text-white hover:bg-exo-red-hover disabled:bg-exo-red-pressed";

    $: {
        BUTTON_CLASS = classNames(
            "flex justify-center items-center text-sm cursor-pointer rounded-md transition-shadow duration-200 rounded hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-75",
            variant === ButtonVariant.Primary && PRIMARY_BUTTON_CLASSES,
            variant === ButtonVariant.Secondary && SECONDARY_BUTTON_CLASSES,
            variant === ButtonVariant.Danger && DANGER_BUTTON_CLASSES,
            size === ButtonSize.Large && "px-4 py-2 w-full",
            size === ButtonSize.Medium && "px-3 py-2",
            size === ButtonSize.Small && "px-2 py-1",
            disabled && "!exo-gray-600 !border-0 !cursor-not-allowed",
            isLoading && "opacity-[90%] !cursor-not-allowed",
            className
        );
    }
</script>

<button class="inline-block" {type} disabled={disabled || isLoading} on:click>
    <div class={BUTTON_CLASS}>
        {#if icon}
            <figure class="h-6 w-6">
                <svelte:component this={icon} class="h-6 w-6 text-inherit" />
            </figure>
        {/if}
        <span class="px-2">
            <slot />
          </span>
    </div>
</button>
