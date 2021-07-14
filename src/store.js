import { writable, get } from "svelte/store";
import { getLocalStore, setLocalStore } from "./chrome";

export const MERGE_TYPES = {
  MERGE: "merge",
  SQUASH: "squash",
  REBASE: "rebase",
};

export const index = writable(null);
export const repos = writable([]);
export const loaded = writable(false);

getLocalStore((data) => {
  console.log("data loaded", data);
  if (data && data.repos && data.repos[0] && data.repos[0].name !== undefined) {
    // use stored data
    repos.set([...data.repos]);
  } else {
    // new
    repos.set([
      {
        isDefault: true,
        name: "DEFAULT",
        isActive: true,
        repo: "*",
        stages: [
          {
            from: "develop",
            to: "main",
            type: MERGE_TYPES.MERGE,
          },
        ],
      },
    ]);
  }

  loaded.set(true);

  repos.subscribe((value) => {
    console.log("🤷‍♂️", { repos: get(repos) });
    setLocalStore({ repos: get(repos) });
    console.log("repos subscribed", value);
  });
});

export const addRepo = (setting) => {
  if (setting === undefined) {
    setting = {
      name: "NEW",
    };
  }

  repos.update((val) => [...val, setting]);
};

export const selectRepo = (value) => {
  if (value !== null && value >= 0 && value < get(repos).length) {
    index.set(value);
  } else {
    index.set(null);
  }
};

export const removeRepo = (repoIndex) => {
  index.set(null);
  repos.update((val) => [...val.filter((r,i) => i !== repoIndex)]);
};
