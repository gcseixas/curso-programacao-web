window.addEventListener("DOMContentLoaded", () => {
  const tiles = Array.from(document.querySelectorAll(".tiles"));

  const playerDisplay = document.querySelector(".display-player");

  const resetButton = document.querySelector("#reset");

  const announcer = document.querySelector(".announcer");

  let board = ["", "", "", "", "", "", "", "", ""];

  let currentPlayer = "X";
  let isGameActive = true;

  const PLAYER_X_WON = "PLAYER_X_WON";

  const PLAYER_O_WON = "PLAYER_O_WON";

  const TIE = "TIE";

  //   INDEX DO TABULEIRO
  // [0],[1],[2]
  // [3],[4],[5]
  // [6],[7],[8]

  const winningConditions = [
    [0][1][2],
    [3][4][5],
    [6][7][8],
    [0][3][6],
    [1][4][7],
    [2][5][8],
    [0][4][8],
    [2][4][6],
  ];

  const isValidAction = (tile) => {
    if (tile.innerText === "X" || tile.innerText === "O") {
      return false;
    } else {
      return true;
    }
  };

  const updateBoard = (index) => {
    board[index] = currentPlayer;
  };

  const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === "X" ? "X" : "O";

    playerDisplay.innerText = currentPlayer;

    playerDisplay.classList.add(`player${currentPlayer}`);
  };

  const announce = (type) => {
    switch (type) {
      case PLAYER_O_WON:
        announcer.innerHTML = 'Player <spam class="playerO">O</spam> Won';
        break;

      case PLAYER_X_WON:
        announcer.innerHTML = 'Player <spam class="playerX">X</spam> Won';
        break;

      case TIE:
        announcer.innerHTML = "TIE";
    }
    announcer.classList.remove("hide");
  };

  const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winningConditions = winningConditions[i];

      
    }
  };
});
