
<div class="repos mt-4">
  {#each $repos as { name, isActive }, i}
    <div class="center row {isActive ? 'active' : 'inactive'}">
      <div class="col c8 text-left">
      {name}
      </div>
      <div class="col c4 pr-4 text-right">
        <button
        class="btn btn-sm primary"
        on:click={() => selectRepo(i)}>EDIT</button
      >
      </div>
    </div>
  {/each}
</div>

<div class="center mt-4">
  <button class="btn btn-sm primary" on:click={createRepo}>CREATE RULE</button>
</div>

<script>
  import "./style.css";
  import { addRepo, repos, selectRepo } from "./store.js";

  function createRepo (){
    selectRepo(addRepo())
  }
</script>

<style>
  .inactive {
    color: var(--col-default-2);
    border-left: 5px solid var(--col-default-1);
  }
  .active {
    color: var(--col-primary-3);
    border-left: 5px solid var(--col-success-2);
  }
  .row{
    margin:0;
    border-top:1px solid var(--col-default-2);
    border-right:1px solid var(--col-default-2);
    padding: 5px 0;
  }
  .row:last-child{
    border-bottom:1px solid var(--col-default-2);
  }
</style>
