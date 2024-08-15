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
/* ------------------------- Close Select && Ovarlay ------------------------ */
overlay.addEventListener("click", () => {
  for (let i = 0; i < selectBox.length; i++) {
    selectBox[i].classList.remove("active-select");
    selectBox[i].style.height = 0;
  }
  overlay.classList.remove("isOpen");
  select = false;
});

/* -------------------------- Native input file JS -------------------------- */
const fileInput1 = document.getElementById("file-input-1");
const fileInput2 = document.getElementById("file-input-2");

let imgInp = [fileInput1, fileInput2];
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
// for (let i = 0; i < inp.length; i++) {
//   inp[i].addEventListener("change", () => {
//     if (inp[i].files[0]) {
//       const reader = new FileReader();

//       reader.onload = function (e) {
//         const realPathArray = inp[i].value.split("\\");
//         let caption =
//           inp[i].previousSibling.previousSibling.children[1].children[0];
//         let fileName =
//           inp[i].previousSibling.previousSibling.children[1].children[1];
//         let img =
//           inp[i].previousSibling.previousSibling.children[0].firstElementChild
//             .firstElementChild;

//         let btnGroup = inp[i].previousSibling.previousSibling.children[2];

//         btnGroup.children[1].classList.add("active");
//         btnGroup.children[2].classList.add("active");
//         img.src = URL.createObjectURL(inp[i].files[0]);
//         fileName.innerHTML = realPathArray[realPathArray.length - 1];
//         caption.innerText = "Downloaded";
//         btnGroup.firstElementChild.innerText = "Change";
//       };

//       reader.readAsDataURL(inp[i].files[0]);
//     }

//     // if (inp[i].value === "") {
//     //   inp[i].nextElementSibling.innerHTML = fileErr;
//     // } else {
//     //   const realPathArray = inp[i].value.split("\\");
//     //   let caption =
//     //     inp[i].previousSibling.previousSibling.children[1].children[0];
//     //   let fileName =
//     //     inp[i].previousSibling.previousSibling.children[1].children[1];
//     //   let img =
//     //     inp[i].previousSibling.previousSibling.children[0].firstElementChild
//     //       .firstElementChild;

//     //   let btnGroup = inp[i].previousSibling.previousSibling.children[2];

//     //   btnGroup.children[1].classList.add("active");
//     //   btnGroup.children[2].classList.add("active");
//     //   img.src = URL.createObjectURL(inp[i].files[0]);
//     //   fileName.innerHTML = realPathArray[realPathArray.length - 1];
//     //   caption.innerText = "Downloaded";
//     //   btnGroup.firstElementChild.innerText = "Change";
//     // }
//   });
// }
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

/* ------------------------------- Select End ------------------------------- */

let textArea = document.querySelectorAll("textarea");
let inpText = document.querySelectorAll('input[type="text"]');
/* -------------------------- Reset textarea error -------------------------- */
for (let i = 0; i < textArea.length; i++) {
  textArea[i].addEventListener("input", () => {
    if (textArea[i].style.borderColor != "#1f4586") {
      textArea[i].style.borderColor = "#1f4586";
    } else {
      return true;
    }
    // let size = textArea[i].nextElementSibling.children;
    // size[0].innerHTML = Number(size[1].textContent) - textArea[i].value.length;
  });
}
for (let i = 0; i < inpText.length; i++) {
  inpText[i].addEventListener("input", () => {
    if (inpText[i].style.borderColor != "#1f4586") {
      inpText[i].style.borderColor = "#1f4586";
    } else {
      return true;
    }
  });
}

function resetError() {
  // type text inputs
  for (let i = 0; i < inpText.length; i++) {
    inpText[i].addEventListener("input", () => {
      let error = inpText[i].nextElementSibling;
      if (error.textContent === "") {
        return true;
      } else {
        error.innerHTML = "";
      }
    });
  }
}
// resetError();

let formAbstract = document.querySelector("#detail-main-tab");
let publish=document.querySelector(".checkbox")
formAbstract.addEventListener("submit", (event) => {
  event.preventDefault();

  let selectText = document.querySelectorAll(".text");
  var isValid;
  isValid = true;
  /* ----------------------- Type text INPUT value check ---------------------- */
  for (let i = 0; i < inpText.length; i++) {
    if (inpText[i].value.trim() === "") {
      // inpText[i].nextElementSibling.innerHTML = textInpErr;
      inpText[i].style.borderColor = "#ff014f";
      inpText[i].scrollIntoView({ behavior: "smooth", block: "center" });
      isValid = false;
    }
  }

  /* ------------------------------ Select Check ------------------------------ */
  for (let i = 0; i < selectText.length; i++) {
    if (
      selectText[i].textContent === "Seç" ||
      selectText[i].textContent === "Choose"
    ) {
      let selectTextParent = selectText[i].parentElement.parentElement;
      selectTextParent.style.borderColor = "#ff014f";
      selectTextParent.scrollIntoView({ behavior: "smooth", block: "center" });
      isValid = false;
    }
  }

  /* ----------------------------- Textarea check ----------------------------- */
  for (let i = 0; i < textArea.length; i++) {
    if (textArea[i].value.trim() === "") {
      textArea[i].style.borderColor = "#ff014f";
      textArea[i].scrollIntoView({ behavior: "smooth", block: "center" });
      isValid = false;
    }
  }

  /* ----------------------------- Img check ----------------------------- */
  for (let i = 0; i < imgInp.length; i++) {
    if (imgInp[i].value.trim() === "") {
      imgInp[i].parentElement.firstElementChild.style.borderColor = "#ff014f";
      imgInp[i].parentElement.firstElementChild.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      isValid = false;
    }
  }

  if (isValid) {
    /* -------------------------------- SEND DATA ------------------------------- */


    // Fetch post

    Swal.fire({
      title: "Data Saved!",
      icon: "warning",
      showCancelButton: false,
      showConfirmButton: false,
      // confirmButtonColor: "#3085d6",
      // cancelButtonColor: "#d33",
      // confirmButtonText: "Yes, delete it!",
      // cancelButtonText: "No, cancel!",
      customClass: {
        popup: "sweet-pop-content",
        title: "sweet-title",
        icon: "sweet-icon-handle",
        actions: "sweet-alert-action-area",
        confirmButton: "sweet-btn-confirm",
        cancelButton: "sweet-btn-cancel",
      },
    });
  }
});
