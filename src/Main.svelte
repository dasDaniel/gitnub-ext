
  {#each $repos as { name, isActive }, i}
    <div class="center mt-2">
      <button
        class="button {isActive ? '' : 'inactive'}"
        on:click={() => selectRepo(i)}>{name}</button
      >
    </div>
  {/each}
  <div class="center mt-2">
    <button class="button" on:click={() => addRepo()}>+</button>
  </div>

<script>
  import "./style.css";
  import { addRepo, repos, selectRepo } from "./store.js";
</script>

<style>
  .button.inactive {
    opacity: 0.5;
  }
</style>
