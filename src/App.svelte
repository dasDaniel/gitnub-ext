<main>
  <!-- {JSON.stringify($loaded)} -->
  <!-- {JSON.stringify($appState)} -->
  {#if $loaded === true}
    {#if $index === null}
      <Main />
    {:else}
      <Detail />
    {/if}
  {/if}
</main>

<script>
  import { index, appState, loaded } from "./store.js";
  import Main from "./Main.svelte";
  import Detail from "./Detail.svelte";
</script>
