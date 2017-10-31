var menuOpen = document.querySelector(".main-nav__toggle--closed");

menuOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.add("main-nav__toggle--open");
  menuOpen.classList.remove("main-nav__toggle--closed");
});

// var menuClosed = document.querySelector(".main-nav__toggle--open");

// menuClosed.addEventListener("click", function (evtt) {
//   evtt.preventDefault();
//   menuClosed.classList.add("main-nav__toggle--closed");
//   menuClosed.classList.remove("main-nav__toggle--open");
// });
