<script lang="ts">
   export let name: string;
   export let disabled: boolean;
</script>
<div>
   <input type="checkbox" id="switch" {disabled} data-testid="switch-{name}">
   <label class="base" for="switch" class:disabled={disabled}></label>
</div>

<style lang="postcss">
 .base{
    @apply bg-exo-grayscale-border duration-200 h-7 w-14 inline-block rounded-full relative cursor-pointer;
 }

 .base::after {
    @apply content-[''] h-5 w-5 bg-white block absolute rounded-full top-1 left-1 duration-300 drop-shadow-md
 }

 #switch:checked + .base::after {
   @apply left-8 
 }

 #switch:checked + .base {
   @apply bg-exo-blue-base
 }

 #switch {
   @apply hidden
 }

 .disabled {
    @apply cursor-not-allowed opacity-40;
  }
</style>