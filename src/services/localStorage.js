const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key) => {
  const localStorageData = localStorage.getItem(key);
  return JSON.parse(localStorageData);
};

// eslint-disable-next-line
export default {
  get: get,
  set: set,
};
