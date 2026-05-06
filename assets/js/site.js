(function () {
  var button = document.querySelector(".theme-toggle");
  var headings = document.querySelectorAll(".page h2, .page h3");

  function applyTheme(theme) {
    document.body.classList.toggle("theme-dark", theme === "dark");
    document.body.classList.toggle("theme-light", theme === "light");
    if (button) {
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else if (button && window.matchMedia) {
    var initiallyDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    button.setAttribute("aria-pressed", initiallyDark ? "true" : "false");
    button.setAttribute("aria-label", initiallyDark ? "Switch to light mode" : "Switch to dark mode");
  }

  if (button) {
    button.addEventListener("click", function () {
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var isDark = document.body.classList.contains("theme-dark") ||
        (!document.body.classList.contains("theme-light") && prefersDark);
      var nextTheme = isDark ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  headings.forEach(function (heading) {
    if (!heading.id) return;

    var anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = "#" + heading.id;
    anchor.textContent = "#";
    anchor.setAttribute("aria-label", "Link to " + heading.textContent);
    heading.appendChild(anchor);
  });

  var origin = window.location.origin;
  document.querySelectorAll('.page a[href^="http"]').forEach(function (link) {
    if (link.href.indexOf(origin) === 0) return;
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
})();
