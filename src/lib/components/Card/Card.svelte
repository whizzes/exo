<script lang="ts" context="module">
  export enum CardDepth {
    DropSmall = "DropSmall",
    DropRegular = "DropRegular",
    DropLarge = "DropLarge",
  }
</script>

<script lang="ts">
  export let depth: CardDepth = CardDepth.DropRegular;
  export let className = "";
  export { className as class };
</script>

<div
  data-testid="card"
  class={className}
  class:card={true}
  class:depth-drop_small={depth === CardDepth.DropSmall}
  class:depth-drop_regular={depth === CardDepth.DropRegular}
  class:depth-drop_large={depth === CardDepth.DropLarge}
>
  <slot />
</div>

<style lang="postcss">
  .card {
    @apply bg-white rounded-lg p-2;
  }

  .depth-drop_small {
    @apply drop-shadow;
  }

  .depth-drop_regular {
    @apply drop-shadow-md;
  }

  .depth-drop_large {
    @apply drop-shadow-lg;
  }
</style>
