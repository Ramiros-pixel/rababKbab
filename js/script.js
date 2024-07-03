// Toggle class active
const well = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  well.classList.toggle("active");
};

//menghilangkan menu

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !well.contains(e.target)) {
    well.classList.remove("active");
  }
});
