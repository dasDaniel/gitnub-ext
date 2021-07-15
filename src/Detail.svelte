{#if $appState.detail}
  <div class="row center mt-4">
    <div class="col no-gutter c10">
      <label for="name"
        >NAME: {#if $appState.detail?._isDefault}
          <input type="text" id="name" bind:value={$appState.detail._name} disabled />
        {:else}
          <input type="text" id="name" bind:value={$appState.detail._name} />
        {/if}
      </label>
    </div>
    <div class="col no-gutter c2">
      <label class="label-inline" for="isActive">Enabled</label>
      <input type="checkbox" id="isActive" bind:checked={$appState.detail._isActive} />
    </div>
  </div>
  <div class="row center mt-4">
    <div class="col no-gutter c10">
      <label for="repo"
        >URL (regex)
        <input type="text" id="repo" bind:value={$appState.detail._repo} />
      </label>
    </div>
    <div class="col no-gutter c2"></div>
  </div>

  <div class="row mt-4 ">
    <div class="col no-gutter c4">TO</div>
    <div class="col no-gutter c4">FROM</div>
    <div class="col no-gutter c3">TYPE</div>
    <div class="col no-gutter c1" />
  </div>
  {#each $appState.detail?._stages as { to, from, type }, i}
    <div class="row mt-2">
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

  <!-- ADD -->
  <div class="row mt-2 py-4">
    <div class="col no-gutter c4">
      <input class="muted" type="text" bind:value={$appState.detail._newTo} />
    </div>
    <div class="col no-gutter c4">
      <input class="muted" type="text" bind:value={$appState.detail._newFrom} />
    </div>
    <div class="col no-gutter c3">
      <select class="muted" bind:value={$appState.detail._newType}>
        <option />
        {#each Object.values(MERGE_TYPES) as mergetype}
          <option value={mergetype}>{mergetype}</option>
        {/each}
      </select>
    </div>
    <div class="col no-gutter c1">
      <button on:click={add} disabled={!addEnabled} class="btn btn-action add"
        >+</button
      >
    </div>
  </div>
  <div class="row mt-2 py-4">
    <div class="col no-gutter c4">
      <button
        class="btn danger"
        disabled={$appState.detail._isDefault}
        on:click={() => removeRepo($index)}>DELETE</button
      >
    </div>
    <div class="col no-gutter c4">
      <button class="btn success" on:click={save}>SAVE</button>
    </div>
    <div class="col no-gutter c4">
      <button class="btn" on:click={() => selectRepo(null)}>CANCEL</button>
    </div>
  </div>
{/if}

{#if $unsavedChanges}
<div class="row center mt-2 warn">
  You have unsaved changes
</div>
{/if}

<script>
  import { derived } from "svelte/store";
  import {
    repos,
    index,
    selectRepo,
    removeRepo,
    MERGE_TYPES,
    appState,
  } from "./store.js";


  if($appState?.detail) {
    $appState = {
      index: $index,
      detail: {...$appState?.detail}
    };
  } else {
    $appState = {
      index: $index,
      detail: {
        _repo : $repos[$index].repo,
        _isActive : $repos[$index].isActive,
        _isDefault : $repos[$index].isDefault,
        _name : $repos[$index].name,
        _stages : Array.isArray($repos[$index].stages)
        ? JSON.parse(JSON.stringify($repos[$index].stages))
        : [],
        _newTo : "",
        _newFrom : "",
        _newType : "",
      }
    };
  }
    
  let unsavedChanges = derived(appState, () => {
    if (!$appState.detail) return true;
    if ($appState.detail._newTo !== "") return true;
    if ($appState.detail._newType !== "") return true;
    if ($appState.detail._newFrom !== "") return true;
    if ($appState?.detail._isActive !== $repos[$index]?.isActive) return true;
    if ($appState?.detail._isDefault !== $repos[$index]?.isDefault) return true;
    if ($appState?.detail._name !== $repos[$index]?.name) return true;
    if (JSON.stringify($appState?.detail?._stages) !== JSON.stringify($repos[$index]?.stages)) return true;

    return false;
  });

  $: addEnabled = $appState?.detail && $appState?.detail._newTo !== "" && $appState?.detail._newFrom !== "" && $appState?.detail._newType !== "";

  const add = () => {
    $appState.detail._stages = [
      ...$appState?.detail?._stages,
      {
        to: $appState?.detail?._newTo,
        from: $appState?.detail?._newFrom,
        type: $appState?.detail?._newType,
      },
    ];
    $appState.detail._newTo = "";
    $appState.detail._newFrom = "";
    $appState.detail._newType = "";
  };

  const remove = (index) => {
    $appState.detail._stages = $appState?.detail._stages.filter((stage, i) => i !== index);
  };

  const save = () => {
    console.log($appState)
    $repos[$index] = {
      ...$repos[$index],
      repo: $appState?.detail?._repo,
      isActive: $appState?.detail?._isActive,
      isDefault: $appState?.detail?._isDefault,
      name: $appState?.detail?._name,
      stages: $appState?.detail?._stages,
    };
    selectRepo(null);
  };
</script>

<style>
  input:disabled {
    user-select: none;
    pointer-events: none;
    color: grey;
  }

  /* .row {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
  } */

  button {
    padding: 4px 8px;
  }

  button.success {
    background-color: greenyellow;
  }
  button.danger {
    background-color: tomato;
  }

  input[type="text"],
  select {
    width: 100%;
  }

  .btn-action {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    padding: 0em 0 0 0em;
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
    background-color: tomato;
  }
  .btn-action.remove:hover {
    background-color: rgb(201, 64, 40);
  }
  .btn-action.add {
    background-color: rgb(121, 185, 24);
  }
  .btn-action.add:hover {
    background-color: rgb(88, 139, 12);
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
  .muted {
    border-color: #999;
    color: #999;
  }
  input.muted:focus-visible {
    border-color: #999;
    color: #999;
    outline-color: #999;
  }
  .warn {
    margin-top:20px;
    padding: 4px;
    border-radius: 2px;
    background-color: #dce3eb;
    color: #66717c;
    opacity: 0.9;
  }
</style>
