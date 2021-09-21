<button
  on:click
  on:submit
  class="{$$props.class} inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100"

  class:border-red-300={!!danger}
  class:hover:bg-red-100={!!danger}
  class:border-green-300={!!success}
  class:hover:bg-green-100={!!success}
><slot/></button>

<script>
  export let danger = false
  export let success = false
</script>