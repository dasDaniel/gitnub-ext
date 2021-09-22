<main class="w-96 my-2 mx-auto p-3">
  <!-- {JSON.stringify($loaded)} -->
  <!-- {JSON.stringify($appState)} -->
  {#if $loaded === true}
    {#if $appState.index >= 0}
      <Detail />
    {:else}
      <Main />
    {/if}
  {/if}
</main>

<script>
  import { appState, loaded } from "./store.js";
  import Main from "./Main.svelte";
  import Detail from "./Detail.svelte";
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
