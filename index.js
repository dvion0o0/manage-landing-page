const header = document.querySelector("header");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function () {
  header.classList.toggle("active");
});
