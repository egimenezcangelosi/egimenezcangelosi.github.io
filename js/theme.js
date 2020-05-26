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

document.getElementById("style-toggler").addEventListener("change", function() {
  var currentTheme = getFromLocalstorage("Theme", "light-theme");
  if (currentTheme === "light-theme") setTheme("dark-theme");
  else setTheme("light-theme");
});

function setTheme(theme) {
  localStorage.setItem("Theme", theme);
  document.documentElement.className = theme;
}
