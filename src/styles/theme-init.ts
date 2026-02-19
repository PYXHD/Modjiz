const themeInitScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.dataset.theme = savedTheme;
      return;
    }

    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
  } catch (error) {
    // thème par défaut (:root = light)
  }
})();
`;

export { themeInitScript };
