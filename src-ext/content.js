const storeKey = "gitnub";

/**
 * @typedef Repo
 * @type {Object}
 * @property {boolean} isDefault
 * @property {boolean} isActive
 * @property {string} name
 * @property {string} repo
 * @property {Object[]} stages
 * @property {string} stages[].from
 * @property {string} stages[].to
 * @property {string} stages[].type
 */

/**
 * @type {Object}
 * @property {Repo[]} repos
 */
let store = { repos: [] };

/** @type {Repo[]} */
let activeRepos = [];

chrome.storage.local.get(storeKey, (storage) => {
  if (storeKey in storage) {
    store = storage[storeKey];
    if (store) {
      handler();
    }
  }
});

const state = {
  from: null,
  to: null,
};

const SELECTOR = {
  BRANCH_FROM: ".commit-ref.expandable.head-ref",
  BRANCH_TO: ".commit-ref.expandable:not(.head-ref)",
  COMPARES: ".select-menu-button.branch",
};

const REGEX = {
  MAIN: /^(main|master)$/i,
  STAGING: /^staging$/i,
  DEVELOP: /^develop[\w]*$/i,
  MAIN_AND_STAGING: /^(main|master|staging)/i,
};

let activeChange = false;

chrome.runtime.onMessage.addListener((request) => handleMessage(request));

function handleMessage(request) {
  if (request.message === "redirect") {
    handlePrPage();
  }
}

function isCompareUrl() {
  return !!window.location.toString().match(/\/compare\//);
}

function isPRUrl() {
  return !!window.location.toString().match(/pull\/\d*$/i);
}

function handleComparePage() {
  if (!isCompareUrl()) return;
  const [elToBranch, elFromBranch] = document.querySelectorAll(
    SELECTOR.COMPARES
  );
  state.from = elFromBranch.querySelector(
    "span.css-truncate-target"
  ).textContent;
  state.to = elToBranch.querySelector("span.css-truncate-target").textContent;
  initPage();
}

function handlePrPage() {
  if (!isPRUrl()) return;
  const elToBranch = document.querySelector(SELECTOR.BRANCH_TO);
  const elFromBranch = document.querySelector(SELECTOR.BRANCH_FROM);
  if (!elFromBranch) return;
  if (!elToBranch) return;
  state.from = elFromBranch.textContent;
  state.to = elToBranch.textContent;
  initPage();
}

function handler() {
  if (activeChange) return;
  if (!Array.isArray(store.repos)) return;
  activeChange = true;

  /** @type {Repo[]} */
  activeRepos = store.repos.filter((r) => {
    if (!r.isActive) return false;
    return !!window.location.toString().match(r.repo);
  });
  handlePrPage();
  handleComparePage();
  activeChange = false;
}

function addWarningToCompareBranch() {
  const [elToBranch, elFromBranch] = document.querySelectorAll(
    SELECTOR.COMPARES
  );
  if (elToBranch) {
    elToBranch.classList.add("btn-danger");
    elToBranch.classList.add("color-bg-danger");
    elToBranch.classList.add("color-text-danger");
  }
}

function removeWarningFromCompareBranch() {
  const [elToBranch, elFromBranch] = document.querySelectorAll(
    SELECTOR.COMPARES
  );
  if (elToBranch) {
    elToBranch.classList.remove("btn-danger");
    elToBranch.classList.remove("color-bg-danger");
    elToBranch.classList.remove("color-text-danger");
  }
}

function addWarningToBranch() {
  document.querySelectorAll(SELECTOR.BRANCH_TO).forEach((el) => {
    el.classList.add("color-bg-danger");
    el.classList.remove("color-bg-success");
    el.querySelectorAll("a").forEach((child) => {
      child.classList.add("color-text-danger");
      child.classList.remove("color-text-success");
    });
  });
}

function removeWarningFromBranch() {
  document.querySelectorAll(SELECTOR.BRANCH_TO).forEach((el) => {
    el.classList.remove("color-bg-danger");
    el.classList.add("color-bg-success");
    el.querySelectorAll("a").forEach((child) => {
      child.classList.remove("color-text-danger");
      child.classList.add("color-text-success");
    });
  });
}

function initPage() {
  ///////////////////////////////////
  // handle target branch
  ///////////////////////////////////

  removeWarningFromBranch();
  removeWarningFromCompareBranch();

  let allowRebase = false;
  let allowMerge = false;
  let allowSquash = false;

  activeRepos.forEach((repo) => {
    let validStage = repo.stages.find((stage) => {
      return !!state.to.match(stage.to) && !!state.from.match(stage.from);
    });
    if (!validStage) {
      // add warning
      addWarningToBranch();
      addWarningToCompareBranch();

      ///////////////////////////////////
      // handle buttons
      ///////////////////////////////////
    }
    if (validStage) {
      if (validStage.type === "rebase") allowRebase = true;
      if (validStage.type === "merge") allowMerge = true;
      if (validStage.type === "squash") allowSquash = true;
    }
  });

  !allowRebase && showErrOnRebase();
  !allowMerge && showErrOnMerge();
  !allowSquash && showErrOnSquash();
}

function showErrOnRebase() {
  const rebaseButtons = document.querySelectorAll(".btn-group-rebase");
  rebaseButtons.forEach((el) => {
    el.classList.remove("btn-primary");
    el.classList.add("btn-danger");
  });
}
function showErrOnMerge() {
  const mergeButtons = document.querySelectorAll(".btn-group-merge");
  mergeButtons.forEach((el) => {
    el.classList.remove("btn-primary");
    el.classList.add("btn-danger");
  });
}
function showErrOnSquash() {
  const squashButtons = document.querySelectorAll(".btn-group-squash");
  squashButtons.forEach((el) => {
    el.classList.remove("btn-primary");
    el.classList.add("btn-danger");
  });
}

// ⌚👀 for dom changes
const config = { attributes: false, childList: true, subtree: true };
const observer = new MutationObserver(() => handler());
observer.observe(document.body, config);
