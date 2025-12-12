// smooth scroll to projects when arrow is clicked
document.querySelector(".scroll-arrow").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});

// Sticky translucent header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

