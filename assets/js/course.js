function deleteElem(event) {
  let deleteFileName =
    event.target.parentElement.parentElement.parentElement.parentElement
      .children[1].textContent;
  Swal.fire({
    title: `Are you sure you want to delete the "${deleteFileName}"?`,
    icon: "warning",
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    customClass: {
      popup: "sweet-pop-content",
      title: "sweet-title",
      icon: "sweet-icon-handle",
      actions: "sweet-alert-action-area",
      confirmButton: "sweet-btn-confirm",
      cancelButton: "sweet-btn-cancel",
    },
  }).then((result) => {
    if (result.isConfirmed) {
    }
  });
}
