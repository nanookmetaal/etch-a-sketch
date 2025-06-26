const container = document.querySelector("#etch-field");

const board = [];
board.length = 16;

for (let i = 0; i < board.length; i++) {
  board[i] = [];
  board[i].length = 16;

  for (let j = 0; j < board[i].length; j++) {
    board[i][j] = {
      color: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
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
