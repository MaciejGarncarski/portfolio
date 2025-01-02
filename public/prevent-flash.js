const theme = localStorage.getItem("theme");

if (!theme) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

if (theme === "dark") {
  document.documentElement.classList.add("dark");
}

if (theme === "light") {
  document.documentElement.classList.remove("dark");
}
