const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onPlayerChange, turns }) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const handleUserSelection = (rowI, colI) => {
  //   setGameBoard(prevBoard => {
  //     const updatedBoard = [...prevBoard];
  //     updatedBoard[rowI][colI] = player;
  //     return updatedBoard;
  //   });

  //   onPlayerChange();
  // };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowI) => (
        <li key={rowI}>
          <ol>
            {row.map((playerSymbol, colI) => (
              <li key={colI}>
                <button
                  onClick={() => onPlayerChange(rowI, colI)}
                  disabled={playerSymbol}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
