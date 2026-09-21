document.addEventListener("DOMContentLoaded", async () => {
  const host = document.getElementById("nav-placeholder") || document.getElementById("navbar-container");
  if (!host) return;
  try {
    const response = await fetch("nav.html", { cache: "no-store" });
    if (!response.ok) throw new Error(`Navigation failed (${response.status})`);
    host.innerHTML = await response.text();

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
      });
    }

    const profile = document.getElementById("profile");
    if (profile) profile.addEventListener("click", () => profile.classList.toggle("active"));

    const navbar = document.getElementById("navbar");
    if (navbar) {
      const update = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
      update();
      window.addEventListener("scroll", update, { passive: true });
    }

    const year = document.querySelector("[data-current-year]");
    if (year) year.textContent = new Date().getFullYear();
  } catch (error) {
    console.error(error);
    host.innerHTML = `<div class="nav-error">ShopWise navigation unavailable. <a href="index.html">Go home</a></div>`;
  }
});
