var currentTheme = getFromLocalstorage("Theme", "light-theme");

if (currentTheme === "dark-theme")
  d3.select("#style-toggler").property("checked", true);

d3.select("#style-toggler").on("change", function() {
  if (currentTheme === "light-theme") setTheme("dark-theme");
  else setTheme("light-theme");
});

function setTheme(theme) {
  localStorage.setItem("Theme", theme);
  currentTheme = theme;
  document.documentElement.className = theme;
}

function getFromLocalstorage(key, defaultValue) {
  var value = localStorage.getItem(key);
  if (value === null) {
    return defaultValue;
  }
  return value;
}
