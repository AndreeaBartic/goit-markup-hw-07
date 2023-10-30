(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  const toggleMenu = (action) => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true";
    const shouldOpen =
      action === "open" ? true : action === "close" ? false : !isMenuOpen;

    openMenuBtn.setAttribute("aria-expanded", shouldOpen);
    mobileMenu.classList.toggle("is-open", shouldOpen);

    const scrollLockMethod = shouldOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", () => toggleMenu("toggle"));
  closeMenuBtn.addEventListener("click", () => toggleMenu("close"));

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
