const storeKey = "gitnub";

export const getLocalStore = async () => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(storeKey, (storage) => {
        if (storeKey in storage) {
          resolve(storage[storeKey]);
        }
        storage[storeKey] = {};
        chrome.storage.local.set(storage);
        resolve(storage);
      });
    } catch (error) {
      console.warn(error);
      // fallback for local dev
      let result = window.localStorage.getItem(storeKey);
      resolve(JSON.parse(result));
    }
  });
};

export const setLocalStore = (data) => {
  try {
    chrome.storage.local.get(storeKey, (storage) => {
      if (storeKey in storage === false) {
        storage[storeKey] = {};
      }
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          storage[storeKey][key] = data[key];
        }
      }
      chrome.storage.local.set(storage);
    });
  } catch (error) {
    console.warn(error);
    // fallback for local dev
    window.localStorage.setItem(storeKey, JSON.stringify(data));
  }
};
