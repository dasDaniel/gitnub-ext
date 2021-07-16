<main>
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
