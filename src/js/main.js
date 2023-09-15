"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const primaryNav = document.querySelector(".navigation_primary");
  const navToggle = document.querySelector(".mobile-menu-toggle");

  navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    }

    if (visibility === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });
});
