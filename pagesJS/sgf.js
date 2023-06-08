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
  // new logic for adding the form data to the table
  const table = document.querySelector("#sgf_table"); // replace '#my-table' with the selector for your table element

  // get the form data
  const formData = new FormData(sgfForm);
  const gameID = formData.get("game-id"); // replace 'game-id' with the name of your game ID field
  const dateUploaded = formData.get("date-uploaded"); // replace 'date-uploaded' with the name of your date uploaded field
  const sgfName = formData.get("sgf-name"); // replace 'sgf-name' with the name of your SGF name field

  // create a new row for the table
  const newRow = document.createElement("tr");

  // create cells for the new row and add the form data
  const gameIDCell = document.createElement("td");
  gameIDCell.textContent = gameID;
  newRow.appendChild(gameIDCell);

  const dateUploadedCell = document.createElement("td");
  dateUploadedCell.textContent = dateUploaded;
  newRow.appendChild(dateUploadedCell);

  const sgfNameCell = document.createElement("td");
  sgfNameCell.textContent = sgfName;
  newRow.appendChild(sgfNameCell);

  // add the new row to the table
  table.appendChild(newRow);
});
