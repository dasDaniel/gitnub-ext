<main>
  {#if $index === null}
    <Main />
  {:else}
    <Detail />
  {/if}
</main>

<script>
  import { index } from "./store.js";
  import Main from "./Main.svelte";
  import Detail from "./Detail.svelte";
</script>
