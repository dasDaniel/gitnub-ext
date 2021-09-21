<div class="flex justify-between mt-2 py-4 {addingStage?'disabled':''}">
    <Btn
      danger
      disabled={detail.isDefault}
      on:click={removeActiveRepo}>DELETE</Btn
    >
    
    <WithBadge show={unsavedChanges}>
    <Btn success on:click={save}>SAVE</Btn>
    </WithBadge>
    
    <Btn on:click={resetAppState}>CANCEL</Btn>
</div>

{#if detail}
  <div class="{addingStage?'disabled':''} pb-4 mb-4">

    <div class="grid grid-cols-3 gap-2 items-start">

      <!-- NAME -->
      <label for="name" class="text-sm font-medium text-gray-700 mt-px pt-2"
        >NAME: 
      </label>
      {#if detail?._isDefault}
        <Input class="mt-0 col-span-2" type="text" id="name" bind:value={detail.name} disabled />
      {:else}
        <Input class="mt-0 col-span-2" type="text" id="name" bind:value={detail.name} />
      {/if}

      <!-- ENABLED -->
      <label class="text-sm font-medium text-gray-700 mt-px pt-2" for="isActive">ENABLED:</label>
      <div class="col-span-2 mt-2">
        <input class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" type="checkbox" id="isActive" bind:checked={detail.isActive} />
      </div>
      
      <!-- URL -->
      <label class="text-sm font-medium text-gray-700 mt-px pt-2" for="repo">URL (regex):</label>
      <Input class="mt-0 col-span-2" type="text" id="repo" bind:value={detail.repo} />
    </div>
  </div>
  
  <h2 class="text-md font-normal leading-normal mt-8 mb-2 {addingStage?'disabled':''}">Stages</h2>

  <div class="grid grid-cols-10 gap-2 mt-2 pt-2 border-t border-gray-300 {addingStage?'disabled':''}">

    <!-- HEAD -->
    <div class="col-span-3 text-center text-sm">To:</div>
    <div class="col-span-3 text-center text-sm">From:</div>
    <div class="col-span-3 text-center text-sm">Type:</div>
    <div/>

    <!-- STAGES -->
    {#each detail.stages as { to, from, type }, i}
      <!-- <div class="row mt-2 {addingStage?'disabled':''}"> -->
      <Input class="col-span-3 col-start-1" type="text" bind:value={to} />
      <Input class="col-span-3" type="text" bind:value={from} />
      <Select class="col-span-3" bind:value={type}>
        {#each Object.values(MERGE_TYPES) as mergetype}
          <option value={mergetype}>{mergetype}</option>
        {/each}
      </Select>
      <button class="btn btn-action remove" on:click={() => removeStage(i)}
        >&times;</button
      >
    {/each}
    
    <!-- ADD STAGE BTN -->
    {#if !detail.tempStage}
      <div class="col-span-full flex justify-center">
        <Btn on:click={addStage}>ADD STAGE</Btn>
      </div>
    {/if}
  </div>

  {#if detail.tempStage}
    <div class="grid grid-cols-10 gap-2 mt-2 pt-2 border-t border-gray-300 ">
      <Input class="col-span-3" type="text" bind:value={detail.tempStage.to} />
      <Input class="col-span-3" type="text" bind:value={detail.tempStage.from} />
      <Select class="col-span-3" bind:value={detail.tempStage.type}>
        <option />
        {#each Object.values(MERGE_TYPES) as mergetype}
          <option value={mergetype}>{mergetype}</option>
        {/each}
      </Select>
      <div class="col-span-9 flex justify-around">
        <Btn success on:click={saveNewStage} disabled={!addEnabled} class="btn btn-sm success">ADD STAGE</Btn>
        <Btn on:click={clearNewStage} class="btn btn-sm">CANCEL</Btn>
      </div>
    </div>
  {/if}
{/if}

<script>
  import Btn from "./Btn.svelte";
  import Select from "./Select.svelte";
  import Input from "./Input.svelte";
  import WithBadge from "./WithBadge.svelte";
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

  function removeStage(index) {
    detail.stages = detail.stages.filter((stage, i) => i !== index);
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
  .disabled {
    opacity: 0.45;
    pointer-events: none;
  }
</style>
