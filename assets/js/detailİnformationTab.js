/* --------------------------------- Select Start --------------------------------- */
var select = false;
let overlay = document.querySelector(".overlay");
let selectBox = document.querySelectorAll(".select-list");

function openSelect(event, id) {
  if (select) {
    // Close Select List
    document.getElementById(id).classList.remove("active-select");
    document.getElementById(id).style.height = 0;
    overlay.classList.remove("isOpen");
    select = false;
  } else {
    // Open Select List
    document.getElementById(id).classList.add("active-select");
    // Dinamic height && animation
    if (document.getElementById(id).children.length < 3) {
      document.getElementById(id).style.height = `${
        45 * document.getElementById(id).children.length
      }px`;
    } else {
      document.getElementById(id).style.height = `${45 * 3}px`;
    }
    overlay.classList.add("isOpen");
    if (document.getElementById(id).id === id) {
      // console.log(document.getElementById(id).children)
      let tablinks = document.getElementById(id).children;
      //   Select Item Dom Walking
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", (e) => {
          //   Change Select Text Content
          let parentElementText =
            tablinks[i].parentElement.parentElement.firstElementChild;
          parentElementText.children[0].innerHTML = tablinks[i].textContent;
          parentElementText.parentElement.style.borderColor = "#1f4586";
          // Update Active Item
          for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-item");
          }
          tablinks[i].classList.add("active-item");

          //   Close Select List
          document.getElementById(id).classList.remove("active-select");
          document.getElementById(id).style.height = 0;
          overlay.classList.remove("isOpen");
          select = false;
        });
      }
    }
    select = true;
  }
}
// Close Select && Ovarlay
overlay.addEventListener("click", () => {
  for (let i = 0; i < selectBox.length; i++) {
    selectBox[i].classList.remove("active-select");
    selectBox[i].style.height = 0;
  }
  overlay.classList.remove("isOpen");
  select = false;
});
