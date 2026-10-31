// Progressive enhancement only. Every link, section and message on this site
// works with JavaScript switched off.
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Smooth in-page navigation, with focus moved to the target heading.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const id = link.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion.matches ? "auto" : "smooth",
        block: "start",
      });

      const heading = target.querySelector("h1, h2") || target;
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
      history.replaceState(null, "", id);
    });
  });

  // The header rule thickens once the page moves.
  const header = document.querySelector(".site-header");
  if (header) {
    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  // Mark the section in view in the nav.
  const navLinks = new Map();
  document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
    navLinks.set(link.getAttribute("href").slice(1), link);
  });

  if (navLinks.size && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = navLinks.get(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    navLinks.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
})();
