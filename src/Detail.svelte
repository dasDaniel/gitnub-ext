<div class="row center">
  <div class="col no-gutter c10">
    <label for="name"
      >NAME: {#if _isDefault}
        <input type="text" id="name" bind:value={_name} disabled />
      {:else}
        <input type="text" id="name" bind:value={_name} />
      {/if}
    </label>
  </div>
  <div class="col no-gutter c2">
    <label class="label-inline" for="isActive">Enabled</label>
    <input type="checkbox" id="isActive" bind:checked={_isActive} />
  </div>
</div>
<div class="row center">
  <div class="col no-gutter c10">
    <label for="name"
      >URL (regex)
      <input type="text" id="name" bind:value={_repo} />
    </label>
  </div>
  <div class="col no-gutter c2"></div>
</div>

<div class="row mt-2">
  <div class="col no-gutter c4">TO</div>
  <div class="col no-gutter c4">FROM</div>
  <div class="col no-gutter c3">TYPE</div>
  <div class="col no-gutter c1" />
</div>
{#each _stages as { to, from, type }, i}
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
<div class="row mt-2">
  <div class="col no-gutter c4">
    <input class="muted" type="text" bind:value={_newTo} />
  </div>
  <div class="col no-gutter c4">
    <input class="muted" type="text" bind:value={_newFrom} />
  </div>
  <div class="col no-gutter c3">
    <select class="muted" bind:value={_newType}>
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
<div class="row mt-2">
  <div class="col no-gutter c4">
    <button
      class="btn danger"
      disabled={_isDefault}
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

<script>
  import {
    repos,
    index,
    selectRepo,
    removeRepo,
    MERGE_TYPES,
  } from "./store.js";

  let _repo = $repos[$index].repo;
  let _isActive = $repos[$index].isActive;
  let _isDefault = $repos[$index].isDefault;
  let _name = $repos[$index].name;
  let _stages = Array.isArray($repos[$index].stages)
    ? $repos[$index].stages
    : [];
  let _newTo = "";
  let _newFrom = "";
  let _newType = "";

  $: addEnabled = _newTo !== "" && _newFrom !== "" && _newType !== "";

  const add = () => {
    _stages = [
      ..._stages,
      {
        to: _newTo,
        from: _newFrom,
        type: _newType,
      },
    ];
    _newTo = "";
    _newFrom = "";
    _newType = "";
    console.log(_stages);
  };

  const remove = (index) => {
    _stages = _stages.filter((stage, i) => i !== index);
    console.log(_stages);
  };

  const save = () => {
    $repos[$index] = {
      ...$repos[$index],
      repo: _repo,
      isActive: _isActive,
      isDefault: _isDefault,
      name: _name,
      stages: _stages,
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
    border-radius: 2px;
    max-height: 24px;
    padding-top: 0;
    vertical-align: top;
    box-sizing: border-box;
  }
  .muted {
    border-color: grey;
  }
</style>
