const sgfForm = document.querySelector("#upload-sgf-form");
const fileInput = document.querySelector("#file");

sgfForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from being submitted

  // .files accesses the files property of the selected input element,
  // which is a FileList object representing the files selected by the user
  const files = document.querySelector("#file").files;
  // console.log(files.length);
  if (files.length > 10) {
    alert("You can only upload a maximum of 10 SGFs at once!");
    return; // exit the function early
  }

  // get the form data
  const formData = new FormData(sgfForm);

  // send an AJAX request with the form data
  fetch("http://localhost:8001/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // handle the response from your server
    })
    .catch((error) => {
      console.error(error);
      // handle any errors
    });
});
