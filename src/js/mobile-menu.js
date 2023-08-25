(() => {
    const mobileMenu = document.querySelector(".header-menu-container");
    const openMenuBtn = document.querySelector(".header-menu-btn");
    const body = document.querySelector("body");
  
    const toggleMenu = () => {
      const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
      openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
      mobileMenu.classList.toggle("is-open");
      openMenuBtn.classList.toggle("is-open");
      body.classList.toggle("no-scroll");
      body.classList.toggle("slide");
  
      const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
    };
  
    const mobileLinkRef = document.querySelector("#menu");
    mobileLinkRef.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      openMenuBtn.classList.remove("is-open");
      body.classList.remove("no-scroll")
      openMenuBtn.setAttribute("aria-expanded",false);
    });
  
    openMenuBtn.addEventListener("click", toggleMenu);

    window.matchMedia("(min-width: 1300px)").addEventListener("change", (e) => {
      if (!e.matches) return;
  
      mobileMenu.classList.remove("is-open");
      openMenuBtn.classList.remove("is-open");
      body.classList.remove("no-scroll");
      openMenuBtn.setAttribute("aria-expanded", false);
    });

  })();
  