<span class="relative inline-block">
  <slot/>
  {#if show}
  <span class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-full w-3 h-3 border-white border-2"></span>
  {/if}
</span>

<script>
  export let show = false
</script>