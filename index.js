const header = document.querySelector("header");
const toggle = document.querySelector(".toggle");
const input = document.querySelector(".form-input");
const btn = document.querySelector(".submit");
const error = document.querySelector(".error");
const control = document.querySelector(".form-control");

toggle.addEventListener("click", function () {
  header.classList.toggle("active");
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const value = input.value;
  if (value === "") {
    control.classList.toggle("change");
  } else if (reg.test(value) === false) {
    error.innerHTML = "Please insert a valid email";
    control.classList.toggle("change");
  } else {
    control.classList.remove("change");
  }
});
