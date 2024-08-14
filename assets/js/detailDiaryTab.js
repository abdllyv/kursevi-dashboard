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

/* -------------------------- Native input file JS -------------------------- */
const fileInput1 = document.getElementById("file-input-1");
const fileInput2 = document.getElementById("file-input-2");
const fileInput3 = document.getElementById("file-input-3");

let imgInp = [fileInput1, fileInput2, fileInput3];
const allowedTypes = ["application/pdf"];
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
        console.log(imgInp[i].parentElement);
        imgInp[i].parentElement.children[1].style.borderColor = "#ff014f";
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

        let btnGroup = imgInp[i].previousSibling.previousSibling.children[2];

        btnGroup.children[1].classList.add("active");
        btnGroup.children[2].classList.add("active");
        fileName.innerHTML = realPathArray[realPathArray.length - 1];
        caption.innerText = "Downloaded";
        btnGroup.firstElementChild.innerText = "Change";
        imgInp[i].parentElement.children[1].style.borderColor = " #98989e";
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

  let textArea =
    event.target.parentElement.parentElement.parentElement.children[1];
  let inp =
    event.target.parentElement.parentElement.parentElement.nextElementSibling;

  inp.value = "";
  textArea.firstElementChild.innerText = "PDF for diary";
  textArea.lastElementChild.innerText = "Just downland pdf";
  deleteBtn.parentElement.previousSibling.innerText = "Select";
  deleteBtn.parentElement.classList.remove("active");
  deleteBtn.parentElement.nextElementSibling.classList.remove("active");
}

/* ------------------------------- View Img ------------------------------- */
function viewPdf(event) {
  event.preventDefault();
  event.stopPropagation();
  let inp =
    event.target.parentElement.parentElement.parentElement.nextElementSibling;

  const fileURL = URL.createObjectURL(inp.files[0]);
  window.open(fileURL, "_blank");
}
