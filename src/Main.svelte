<div class="flow-root">
  <h2 class="text-md font-normal leading-normal text-center mt-4 mb-2">
    Repos
  </h2>

  <ul
    role="list"
    class=" mt-2 pt-2 border-t border-gray-300 -my-5 divide-y divide-gray-200"
  >
    {#each $repos as { name, repo, isActive }, i}
      <li class="py-4">
        <div class="flex items-center space-x-4">
          <div class="flex-1 min-w-0">
            <p
              class="text-sm font-medium text-gray-900 truncate"
              class:text-gray-300={!isActive}
            >
              {name}
            </p>
            <p
              class="text-sm text-gray-500 truncate"
              class:text-gray-200={!isActive}
            >
              {repo}
            </p>
          </div>
          <div>
            <Btn on:click={() => selectRepo(i)}>Edit</Btn>
          </div>
        </div>
      </li>
    {/each}
    <li class="py-4 center mt-4 flex justify-center items-center">
      <Btn on:click={createRepo}>CREATE RULE</Btn>
    </li>
  </ul>
</div>

<script>
  import { addRepo, repos, selectRepo } from "./store.js";
  import Btn from "./Btn.svelte";

  function createRepo() {
    selectRepo(addRepo());
  }
</script>
