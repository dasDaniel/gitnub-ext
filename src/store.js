import { writable, get } from "svelte/store";
import { getLocalStore, setLocalStore } from "./chrome";

const VERSION = "0.0.1";

export const MERGE_TYPES = {
  MERGE: "merge",
  SQUASH: "squash",
  REBASE: "rebase",
};

// extension data
export const repos = writable([]);
// popup app state
export const appState = writable({});
export const loaded = writable(false);

getLocalStore().then((data) => {
  console.log({ data });
  if (data && data.repos && data.repos[0] && data.repos[0].name !== undefined) {
    // use stored data
    repos.set([...data.repos]);

    let appStateAge = Date.now() - data.appStateTs;

    // allow 10 minutes
    console.log(appStateAge, data.appState);
    if (appStateAge < 10 * 60 * 1000) {
      if (data.version === VERSION && data.appState) {
        console.log(data.appState);
        if (data.appState.index !== undefined) {
          appState.set(data.appState);
        }
      }
    }
  } else {
    // new
    repos.set([
      {
        name: "DEFAULT",
        isActive: true,
        repo: ".*",
        stages: [
          {
            from: "$develop",
            to: "$main",
            type: MERGE_TYPES.MERGE,
          },
        ],
      },
    ]);
  }

  repos.subscribe(() => get(loaded) && updateStore());
  appState.subscribe(() => get(loaded) && updateStore());
  loaded.set(true);
});

export const addRepo = (setting) => {
  if (setting === undefined) {
    setting = {
      name: "NEW",
    };
  }
  repos.update((val)=>[...val, setting]);
  return get(repos).length - 1;
};

export const selectRepo = (value) => {
  console.log("selectRepo", value);
  if (value !== null && value >= 0 && value < get(repos).length) {
    appState.set({ index: value });
  } else {
    resetAppState();
  }
};

export const removeRepo = (repoIndex) => {
  appState.set({});
  repos.update((val) => [...val.filter((r, i) => i !== repoIndex)]);
};

export const removeActiveRepo = () => {
  let index = get(appState).index;
  removeRepo(index);
};

export const getActiveRepo = () => {
  let index = get(appState).index;
  return get(repos)[index];
};

export const resetAppState = () => {
  appState.set({});
};

export function updateActiveRepo(data) {
  let index = get(appState).index;
  if(index >= 0) {
    repos.update((val)=>{
      return val.map((r,i)=>{
        if (i === index) return data
        return r
      })
    });
  }
}

function updateStore() {
  setLocalStore({
    version: VERSION,
    repos: get(repos),
    appStateTs: Date.now(),
    appState: get(appState),
  });
}
