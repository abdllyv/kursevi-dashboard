let sidebar = document.querySelector(".diary-sidebar");
let addPriceBtn = document.querySelector(".add");
let closeSideBar = document.querySelector(".close");
let overlay = document.querySelector(".overlay");



addPriceBtn.addEventListener("click", () => {
  sidebar.classList.add("isOpenMenu");
  overlay.classList.add("isOpen");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("isOpen");
  sidebar.classList.remove("isOpenMenu");
});

closeSideBar.addEventListener("click", () => {
  overlay.classList.remove("isOpen");
  sidebar.classList.remove("isOpenMenu");
});
