document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");

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
  });
  