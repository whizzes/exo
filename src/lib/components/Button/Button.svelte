<script lang="ts" context="module">
    export enum ButtonStyle {
        Primary = "Primary",
        Secondary = "Secondary",
    }

    export enum ButtonSize {
        Large = "Large",
        Medium = "Medium",
        Small = "Small",
    }

    export enum ButtonType {
        Default = "Default",
        Fixed = "Fixed"
    }
</script>

<script lang="ts">
    import classNames from "classnames";
    import { createEventDispatcher } from "svelte";
    
    export let type: "button" | "submit" = "button";
    export let style: ButtonStyle = ButtonStyle.Primary;
    export let size: ButtonSize = ButtonSize.Medium;
    export let btnType: ButtonType = ButtonType.Default;
    export let name: string;
    export let label: string = '';
    export let isLoading = false;
    export let disabled = false;
    export let leftIcon: any = null;
    export let rightIcon: any = null;
    export let className = "";
    export { className as class };

    const dispatch = createEventDispatcher();
    const PRIMARY_BUTTON_CLASSES =
        "bg-exo-blue-base text-white hover:bg-exo-blue-hover active:bg-exo-blue-pressed";
    const SECONDARY_BUTTON_CLASSES =
        "border border-exo-grayscale-border bg-white text-exo-black hover:bg-exo-grayscale-background-secondary disabled:text-exo-grayscale-pressed";

    let buttonClass: string;
    let containerClassNames: string;

    $: {
        buttonClass = classNames(
            "flex justify-center items-center cursor-pointer rounded-md rounded shadow",
            style === ButtonStyle.Primary && PRIMARY_BUTTON_CLASSES,
            style === ButtonStyle.Secondary && SECONDARY_BUTTON_CLASSES,
            size === ButtonSize.Large && "px-3 py-3 w-full",
            size === ButtonSize.Medium && "px-2 py-2",
            size === ButtonSize.Small && "px-0.5 text-sm py-1",
            disabled && "!opacity-40 !cursor-not-allowed",
            isLoading && "opacity-[90%] !cursor-not-allowed",
            className
        );
        containerClassNames = classNames('inline-block', btnType === ButtonType.Fixed && 'w-full');
    }
</script>

<button
    {type}
    {name}
    class={containerClassNames}
    data-testid="button-{name}"
    disabled={disabled || isLoading}
    on:click={() => !disabled && !isLoading && dispatch("click")}
>
    <div class={buttonClass}>
        {#if leftIcon}
            <figure class="h-6 w-6">
                <svelte:component this={leftIcon} class="h-6 w-6 text-inherit" />
            </figure>
        {/if}
        {#if label}
            <span class="px-2" data-testid="button-{name}-label">
                {label}
            </span>
        {/if}
        {#if rightIcon}
            <figure class="h-6 w-6">
                <svelte:component this={rightIcon} class="h-6 w-6 text-inherit" />
            </figure>
        {/if}
    </div>
</button>
