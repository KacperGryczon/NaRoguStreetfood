const navBars = document.getElementById("nav-i");
const navUl = document.getElementById("nav-ul");
navBars.addEventListener("click", () => {
  navUl.classList.add("nav-ul-active");
});

const navUlI = document.getElementById("nav-ul-i");
navUlI.addEventListener("click", () => {
  navUl.classList.remove("nav-ul-active");
  console.log("siema");
});

const images = document.getElementsByClassName("image");
Array.from(images).forEach((element) => {
  element.addEventListener("mouseenter", () => {
    Array.from(element.children).forEach((child) => {
      child.classList.add("active");
    });
  });

  element.addEventListener("mouseleave", () => {
    Array.from(element.children).forEach((child) => {
      child.classList.remove("active");
    });
  });
});
