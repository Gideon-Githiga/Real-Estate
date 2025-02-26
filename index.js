const cont = document.querySelector("#properties");
const tent = document.querySelector(".slider-container");
cont.addEventListener("scroll", () => {
  if (cont.scrollLeft >= cont.scrollWidth / 2) {
    cont.scrollLeft = 0;
  }
});
let mid = document.querySelectorAll(".mid");
let count = 0;
let total = mid.length;
function lefts() {
  mid[count].style.display = "none";
  count = (count - 1 + total) % total;
  mid[count].style.display = "block";
}
function rights() {
  mid[count].style.display = "none";
  count = (count + 1 + total) % total;
  mid[count].style.display = "block";
}
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  }
  if (window.scrollY < 50) {
    header.classList.remove("sticky");
  }
});
let hum = document.getElementById("hum");
let nav = document.querySelector(".navlinks2");
let hid = document.querySelector(".hid");
hum.addEventListener("click", function () {
  nav.classList.toggle("show");
  hum.style.display = "none";
  hid.style.display = "block";
});
hid.addEventListener("click", function () {
  nav.classList.toggle("show");
  hid.style.display = "none";
  hum.style.display = "block";
});
let navitem = document.querySelectorAll(".actived");
navitem.forEach((item) => {
  item.addEventListener("click", function () {
    navitem.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});
