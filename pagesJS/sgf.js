// uploads SGFs when user clicks open in their file explorer after selecting the SGF files
document.getElementById("file").addEventListener("change", function () {
  const form = document.getElementById("upload-sgf-form");
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // update the page with the confirmation message and the table of uploaded SGFs
      console.log(data.message); // File(s) uploaded!
      console.log(data.count); // number of uploaded files

      // fetch and display the updated list of uploaded SGFs
      fetchAndDisplaySGFs();
    });
});

// prevents user from uploading more than 10 SGFs at once!
const sgfForm = document.querySelector("#upload-sgf-form");
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

function fetchAndDisplaySGFs() {
  fetch("/sgfs")
    .then((response) => response.json())
    .then((sgfs) => {
      // create a table to display the uploaded SGFs
      const table = document.createElement("table");
      const headerRow = document.createElement("tr");
      const nameHeader = document.createElement("th");
      nameHeader.textContent = "Name";
      headerRow.appendChild(nameHeader);
      const dateHeader = document.createElement("th");
      dateHeader.textContent = "Upload Date";
      headerRow.appendChild(dateHeader);
      table.appendChild(headerRow);

      sgfs.forEach((sgf) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = sgf.originalname;
        row.appendChild(nameCell);
        const dateCell = document.createElement("td");
        dateCell.textContent = sgf.uploadDate;
        row.appendChild(dateCell);
        table.appendChild(row);
      });

      // append the table to the page
      document.body.appendChild(table);
    });
}

// call the function when the page loads
fetchAndDisplaySGFs();
