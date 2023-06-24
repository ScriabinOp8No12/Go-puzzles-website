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
  fetch("http://localhost:8000/upload", {
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
//   // logic for adding the form data to the table
//   const table = document.querySelector("#sgf_table"); // replace '#my-table' with the selector for your table element

//   const gameID = formData.get("game-id"); // replace 'game-id' with the name of your game ID field
//   const dateUploaded = formData.get("date-uploaded"); // replace 'date-uploaded' with the name of your date uploaded field
//   const sgfName = formData.get("sgf-name"); // replace 'sgf-name' with the name of your SGF name field

//   // create a new row for the table
//   const newRow = document.createElement("tr");

//   // create cells for the new row and add the form data
//   const gameIDCell = document.createElement("td");
//   gameIDCell.textContent = gameID;
//   newRow.appendChild(gameIDCell);

//   const dateUploadedCell = document.createElement("td");
//   dateUploadedCell.textContent = dateUploaded;
//   newRow.appendChild(dateUploadedCell);

//   const sgfNameCell = document.createElement("td");
//   sgfNameCell.textContent = sgfName;
//   newRow.appendChild(sgfNameCell);

//   // add the new row to the table
//   table.appendChild(newRow);
// });

// // This code uses `fetch()` to send an AJAX request to your server with the form data when the form is submitted. You'll need to replace `'/your-server-endpoint'` with the URL of your server endpoint that will handle the uploaded SGF files.

// // Once you've sent the data to your server, you can analyze it and return any results back to your client-side JavaScript code. You can then use these results to update your page or display additional information to your user.

// // Does this help answer your question?
