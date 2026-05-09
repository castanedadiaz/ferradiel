document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const whatsappFloat = document.getElementById("whatsappFloat");

  // ---- Header scroll behavior ----
  header.style.display = "none";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.style.display = "block";
      header.classList.add("scrolled");
    } else {
      header.style.display = "none";
      header.classList.remove("scrolled");
    }
  });

  // ---- WhatsApp floating button — show after 2s delay ----
  if (whatsappFloat) {
    setTimeout(() => {
      whatsappFloat.classList.add("visible");
    }, 2000);
  }

  // ---- Scroll fade-in animations (IntersectionObserver) ----
  const fadeElements = document.querySelectorAll(".fade-in-section");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything if IntersectionObserver is not supported
    fadeElements.forEach((el) => el.classList.add("is-visible"));
  }
});