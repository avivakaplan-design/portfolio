// smooth scroll to projects when arrow is clicked
document.querySelector(".scroll-arrow").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});
