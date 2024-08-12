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

  if (isValid) {
    console.log("t");
    /* -------------------------------- SEND DATA ------------------------------- */
    if (event.submitter.id === "btnSend") {
      //   axios
      //     .post("http://localhost:5000/api/products", formData)
      //     .then((res) => {
      //       if (res) {
      //         Swal.fire({
      //           position: "center",
      //           icon: "success",
      //           showConfirmButton: false,
      //           timer: 1000,
      //         });
      //       }
      //     })
      //     .catch((err) => console.log(err.message));
      // } else if (event.submitter.id === "btnSave") {
      //   console.log("btnSave");
      // }
    }
  }
});
