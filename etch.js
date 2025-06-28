let height = 16;
let board;
const container = document.querySelector("#etch-field");

function getGridInput() {
  let gridSize;

  do {
    gridSize = Number(prompt("Please enter grid size (max 100)", 16));
  } while (gridSize < 1 || gridSize > 100);

  height = gridSize;

  setupBoard();
}

function setupBoard() {
  board = new Array(height); 

  const etchField = document.getElementById('etch-field');
  etchField.innerHTML = '';

  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(height);

    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = {
        color:
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0"),
        opacity: 0.0,
      };

      const gridElement = document.createElement("div");

      gridElement.classList.add("etch-grid");

      gridElement.style.backgroundColor = board[i][j].color;
      gridElement.style.opacity = board[i][j].opacity;

      gridElement.onmouseenter = () => {
        board[i][j].opacity += 0.05;
        gridElement.style.opacity = board[i][j].opacity;
      };

      container.appendChild(gridElement);

    }
  }

  container.style.gridTemplateColumns = `repeat(${board.length}, 1fr)`;
}

setupBoard();

document.getElementById("set-dim-btn").addEventListener("click", getGridInput);
