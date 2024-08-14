let sidebar = document.querySelector(".speaker-add-sidebar");
let addPriceBtn = document.querySelector(".add");
let closeAddSideBar = document.getElementById("participant-add-close");
let overlay = document.querySelector(".overlay");
let sidebarOverlay = document.querySelector(".sidebar-overlay");

// Add Participant Open Close
addPriceBtn.addEventListener("click", () => {
  sidebar.classList.add("isOpenMenu");
  overlay.classList.add("isOpen");
});
overlay.addEventListener("click", () => {
  overlay.classList.remove("isOpen");
  sidebar.classList.remove("isOpenMenu");
  sidebarOverlay.classList.remove("isOpen");
});
closeAddSideBar.addEventListener("click", () => {
  overlay.classList.remove("isOpen");
  sidebar.classList.remove("isOpenMenu");
  sidebarOverlay.classList.remove("isOpen");
});

/* --------------------------------- Select Start --------------------------------- */
var select = false;
let selectBox = document.querySelectorAll(".select-list");

function openSelect(event, id) {
  if (select) {
    // Close Select List
    document.getElementById(id).classList.remove("active-select");
    document.getElementById(id).style.height = 0;
    sidebarOverlay.classList.remove("isOpen");
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
    sidebarOverlay.classList.add("isOpen");
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
          sidebarOverlay.classList.remove("isOpen");
          select = false;
        });
      }
    }
    select = true;
  }
}
//   Close Select && Ovarlay
sidebarOverlay.addEventListener("click", () => {
  for (let i = 0; i < selectBox.length; i++) {
    selectBox[i].classList.remove("active-select");
    selectBox[i].style.height = 0;
  }
  sidebarOverlay.classList.remove("isOpen");
  select = false;
});

/* -------------------------- Native input file JS -------------------------- */
const fileInput1 = document.getElementById("file-input-1");

let imgInp = [fileInput1];
const allowedTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/tiff",
  "image/svg+xml",
  "image/x-icon",
];

for (let i = 0; i < imgInp.length; i++) {
  imgInp[i].addEventListener("change", () => {
    if (imgInp[i].files[0]) {
      const file = imgInp[i].files[0];

      // Dosya türü doğrulaması
      if (!allowedTypes.includes(file.type)) {
        // Geçersiz dosya seçimini temizle
        imgInp[i].parentElement.firstElementChild.style.borderColor = "#ff014f";
        imgInp[i].value = "";
        return;
      }
      const reader = new FileReader();

      reader.onload = function (e) {
        const realPathArray = imgInp[i].value.split("\\");
        let caption =
          imgInp[i].previousSibling.previousSibling.children[1].children[0];
        let fileName =
          imgInp[i].previousSibling.previousSibling.children[1].children[1];
        let img =
          imgInp[i].previousSibling.previousSibling.children[0]
            .firstElementChild.firstElementChild;
        let btnGroup = imgInp[i].previousSibling.previousSibling.children[2];

        btnGroup.children[1].classList.add("active");
        btnGroup.children[2].classList.add("active");
        img.src = URL.createObjectURL(file);
        fileName.innerHTML = realPathArray[realPathArray.length - 1];
        caption.innerText = "Downloaded";
        btnGroup.firstElementChild.innerText = "Change";
        imgInp[i].parentElement.firstElementChild.style.borderColor =
          " #98989e";
      };

      reader.readAsDataURL(file);
    }
  });
}

/* ------------------------------- Delete Img ------------------------------- */
function resetFileInput(event) {
  event.preventDefault();
  event.stopPropagation();
  let deleteBtn = event.target;
  let img =
    event.target.parentElement.parentElement.parentElement.children[0]
      .firstElementChild.firstElementChild;
  let textArea =
    event.target.parentElement.parentElement.parentElement.children[1];
  let inp =
    event.target.parentElement.parentElement.parentElement.nextElementSibling;

  inp.value = "";
  img.src = "./assets/img/icon/download.svg";
  textArea.firstElementChild.innerText = "Choose an image for the web";
  textArea.lastElementChild.innerText =
    "Img,Wiff...file size no more than 10MB";
  deleteBtn.parentElement.previousSibling.innerText = "Select";
  deleteBtn.parentElement.classList.remove("active");
  deleteBtn.parentElement.nextElementSibling.classList.remove("active");
}

/* ------------------------------- View Img ------------------------------- */
let viewSection = document.querySelector(".photo-view");
console.log(viewSection);
function viewPhoto(event) {
  event.preventDefault();
  event.stopPropagation();
  let inp =
    event.target.parentElement.parentElement.parentElement.nextElementSibling;

  viewSection.classList.add("active");
  viewSection.firstElementChild.firstElementChild.src = URL.createObjectURL(
    inp.files[0]
  );
}

viewSection.addEventListener("click", () => {
  viewSection.classList.remove("active");
});
