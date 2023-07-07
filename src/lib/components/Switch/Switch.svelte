<script lang="ts">
    export let value: boolean;
    export let id: string;
</script>

<div>
   <input type="checkbox" {id} class="switch" >
   <label class="base" for={id}></label>
</div>

<style lang="postcss">
 .base{
    @apply bg-exo-grayscale-border h-7 w-14 inline-block rounded-full relative cursor-pointer;
 }

 .base::after {
    @apply content-[''] h-5 w-5 bg-white block absolute rounded-full top-1 left-1
 }

 .switch:checked + .base::after {
   @apply left-3
 }

 .switch:checked + .base {
   @apply bg-exo-blue-base
 }
</style>