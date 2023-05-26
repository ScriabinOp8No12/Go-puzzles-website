// prevents user from uploading more than 10 SGFs at once!

const sgfForm = document.querySelector("#upload-sgf-form");
sgfForm.addEventListener("submit", (e) => {
  // .files accesses the files property of the selected input element,
  // which is a FileList object representing the files selected by the user
  const files = document.querySelector("#file").files;
  if (files.length > 10) {
    alert("You can only upload a maximum of 10 SGFs at once!");
    e.preventDefault();
  }
});
