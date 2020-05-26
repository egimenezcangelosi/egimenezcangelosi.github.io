document.documentElement.className = getFromLocalstorage(
  "Theme",
  "light-theme"
);

function getFromLocalstorage(key, defaultValue) {
  var value = localStorage.getItem(key);
  if (value === null) {
    return defaultValue;
  }
  return value;
}
