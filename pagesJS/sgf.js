const sgfForm = document.querySelector("#upload-sgf-form");
const fileInput = document.querySelector("#file");

// prevents user from uploading more than 10 SGFs at once!
sgfForm.addEventListener("submit", (e) => {
  // .files accesses the files property of the selected input element,
  // which is a FileList object representing the files selected by the user
  const files = document.querySelector("#file").files;
  // console.log(files.length);
  if (files.length > 10) {
    alert("You can only upload a maximum of 10 SGFs at once!");
    e.preventDefault();
  }
});

// This code block below doesn't need to be here for everything to work...

// // uploads SGFs when user clicks open in their file explorer after selecting the SGF files
// document
//   .getElementById("submit-button")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("file").click();
//   });

// fileInput.addEventListener("change", () => {
//   sgfForm.submit();
// });
