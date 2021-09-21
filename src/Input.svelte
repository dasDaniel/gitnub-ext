<input
  type="text"
  bind:value={value}
  class="{$$props.class||''} w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border border-gray-400 rounded-lg focus:shadow-outline"
/>

<script>
  export let value
</script>