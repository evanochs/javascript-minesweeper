const grid = document.getElementById("grid");

const generateGrid = () => {
  //Generate a 10 x 10 grid
  grid.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    row = grid.insertRow(i);
    for (let k = 0; k < 10; k++) {
      cell = row.insertCell(k);
    }
  }
};

generateGrid();
