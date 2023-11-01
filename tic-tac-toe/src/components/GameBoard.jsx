const GameBoard = ({ onPlayerChange, board }) => {
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
      {board.map((row, rowI) => (
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
