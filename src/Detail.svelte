<div class="row mt-2 py-4 {addingStage?'disabled':''}">
  <div class="col no-gutter c4 text-left">
    <button
      class="btn danger"
      disabled={detail.isDefault}
      on:click={removeActiveRepo}>DELETE</button
    >
  </div>
  <div class="col no-gutter c4">
    <button class="btn success {unsavedChanges?'badge':''} badge-success" on:click={save}>SAVE</button>
  </div>
  <div class="col no-gutter c4 text-right">
    <button class="btn" on:click={resetAppState}>CANCEL</button>
  </div>
</div>
{#if detail}

  <div class="row center mt-4 {addingStage?'disabled':''}">
    <div class="col no-gutter c10">
      <label for="name"
        >NAME: {#if detail?._isDefault}
          <input type="text" id="name" bind:value={detail.name} disabled />
        {:else}
          <input type="text" id="name" bind:value={detail.name} />
        {/if}
      </label>
    </div>
    <div class="col no-gutter c2">
      <label class="label-inline" for="isActive">Enabled</label>
      <input type="checkbox" id="isActive" bind:checked={detail.isActive} />
    </div>
  </div>
  <div class="row center mt-4 {addingStage?'disabled':''}">
    <div class="col no-gutter c10">
      <label for="repo"
        >URL (regex)
        <input type="text" id="repo" bind:value={detail.repo} />
      </label>
    </div>
    <div class="col no-gutter c2"></div>
  </div>
  
  <div class="row mt-4 {addingStage?'disabled':''}">
    <div class="col no-gutter c4">TO</div>
    <div class="col no-gutter c4">FROM</div>
    <div class="col no-gutter c3">TYPE</div>
    <div class="col no-gutter c1" />
  </div>

  {#each detail.stages as { to, from, type }, i}
    <div class="row mt-2 {addingStage?'disabled':''}">
      <div class="col no-gutter c4">
        <input type="text" bind:value={to} />
      </div>
      <div class="col no-gutter c4">
        <input type="text" bind:value={from} />
      </div>
      <div class="col no-gutter c3">
        <select bind:value={type}>
          {#each Object.values(MERGE_TYPES) as mergetype}
            <option value={mergetype}>{mergetype}</option>
          {/each}
        </select>
      </div>
      <div class="col no-gutter c1">
        <button class="btn btn-action remove" on:click={() => remove(i)}
          >&times;</button
        >
      </div>
    </div>
  {/each}
  {#if detail.tempStage}
    <div class="row mt-2 py-4">
      <div class="col no-gutter c4">
        <input class="muted" type="text" bind:value={detail.tempStage.to} />
      </div>
      <div class="col no-gutter c4">
        <input class="muted" type="text" bind:value={detail.tempStage.from} />
      </div>
      <div class="col no-gutter c3">
        <select class="muted" bind:value={detail.tempStage.type}>
          <option />
          {#each Object.values(MERGE_TYPES) as mergetype}
            <option value={mergetype}>{mergetype}</option>
          {/each}
        </select>
      </div>
      <div class="col no-gutter c1"></div>
    </div>
    <div class="row mt-2 py-4">
      <button on:click={saveNewStage} disabled={!addEnabled} class="btn btn-sm success"
        >ADD STAGE</button
      >
      <button on:click={clearNewStage} class="btn btn-sm"
        >CANCEL</button
      >
    </div>
  {:else}
  <div class="row mt-4 py-4">
    <div class="col no-gutter c4">
    <button class="btn btn-sm primary" on:click={addStage}>ADD STAGE</button>
    </div>
  </div>
  {/if}
{/if}
<script>
  import { derived } from "svelte/store";
  import {
    getActiveRepo,
    resetAppState,
    removeActiveRepo,
    MERGE_TYPES,
    appState,
    selectRepo,
    updateActiveRepo,
  } from "./store.js";

  let detail = {}
  let activeRepo = getActiveRepo();
  
  // copy from repos object
  if (activeRepo) {
    detail.repo = activeRepo.repo || "";
    detail.isActive = activeRepo.isActive || "";
    detail.isDefault = activeRepo.isDefault || "";
    detail.name = activeRepo.name || "";
    // deep copy
    detail.stages = JSON.parse(JSON.stringify(activeRepo.stages || []));
    // add initial values for non-repo variables
    detail.tempStage = null;
  }

  // override with app state if details object exists
  if ($appState.detail) {
    detail.repo = $appState.detail.repo || "";
    detail.isActive = $appState.detail.isActive || "";
    detail.isDefault = $appState.detail.isDefault || "";
    detail.name = $appState.detail.name || "";
    detail.stages = $appState.detail.stages || [];
    detail.tempStage = $appState.detail.tempStage || null;
  }

  function checkUnsavedChanges() {
    let r = activeRepo
    if (detail.tempStage !== null) return true;
    if (detail.repo !== r.repo) return true;
    if (detail.isActive !== r.isActive) return true;
    if (detail.name !== r.name) return true;
    // deep-check ~ nested values should be in same order
    if (JSON.stringify(detail.stages) !== JSON.stringify(r.stages || [])) return true;
    return false
  }

  function addStage(){
    detail.tempStage = {
      to:"",
      from:"",
      type:"",
    }
  }

  function saveNewStage () {
    detail.stages = [
      ...detail.stages,
      {
        ...detail.tempStage
      },
    ];
    detail.tempStage = null;
  };

  function clearNewStage(){
    detail.tempStage = null;
  }

  let unsavedChanges = checkUnsavedChanges()

  $: {
    // register detail for reactivity and update appStore
    $appState.detail = detail;
    unsavedChanges = checkUnsavedChanges();
  };

  $: addEnabled = detail.tempStage && detail.tempStage.to !== "" && detail.tempStage.from !== "" && detail.tempStage.type !== "";
  $: addingStage = !!detail.tempStage;

  const save = () => {
    updateActiveRepo({
      ...activeRepo,
      repo: detail.repo,
      isActive: detail.isActive,
      isDefault: detail.isDefault,
      name: detail.name,
      stages: detail.stages,
    });
    selectRepo(null);
  };
</script>

<style>
  input:disabled {
    user-select: none;
    pointer-events: none;
    color: grey;
  }


  button[disabled] {
    opacity:0.6;
  }

  input[type="text"],
  select {
    width: 100%;
  }

  .btn-action {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    padding: 0 0 0 0;
    line-height: 12px;
    font-weight: 900;
    color: white;
    box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.3);
  }
  .btn.btn-action[disabled],
  .btn.btn-action[disabled]:hover {
    background-color: rgb(167, 167, 167);
    color: rgb(216, 216, 216);
    cursor: default;
  }
  .btn-action.remove {
    background-color: var(--col-fail-1);
    /* background-image: linear-gradient(var(--col-fail-2), var(--col-fail-3)); */
    color: var(--col-fail-3);
    border-color: var(--col-fail-2);
  }
  .btn-action.remove:hover {
    background-color: var(--col-fail-2);
    color: var(--col-fail-3);
  }

  input,
  select,
  option {
    border: 1px solid black;
    border-radius: 0px;
    max-height: 24px;
    padding-top: 0;
    vertical-align: top;
    box-sizing: border-box;
    border-top: none;
    border-left: none;
    border-right: none;
  }
  .disabled, .disabled * {
    opacity: 0.7;
    pointer-events: none;
  }
</style>
