import { writable, get } from "svelte/store";
import { getLocalStore, setLocalStore } from "./chrome";

const VERSION = "0.0.1";

export const MERGE_TYPES = {
  MERGE: "merge",
  SQUASH: "squash",
  REBASE: "rebase",
};

export const repos = writable([]);
export const appState = writable({});
export const index = writable(null);
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
          index.set(data.appState.index);
        }
      }
    }
  } else {
    // new
    repos.set([
      {
        // isDefault: true,
        name: "DEFAULT",
        isActive: true,
        repo: ".*",
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

  repos.subscribe(() => get(loaded) && updateStore());
  index.subscribe(() => get(loaded) && updateStore());
  appState.subscribe(() => get(loaded) && updateStore());
  loaded.set(true);
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
    appState.set({});
  }
};

export const removeRepo = (repoIndex) => {
  index.set(null);
  repos.update((val) => [...val.filter((r, i) => i !== repoIndex)]);
};

function updateStore() {
  setLocalStore({
    version: VERSION,
    repos: get(repos),
    appStateTs: Date.now(),
    appState: get(appState),
  });
}
