import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onPlayerChange, player }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleUserSelection = (rowI, colI) => {
    setGameBoard(prevBoard => {
      const updatedBoard = [...prevBoard];
      updatedBoard[rowI][colI] = player;
      return updatedBoard;
    });

    onPlayerChange();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowI) => (
        <li key={rowI}>
          <ol>
            {row.map((playerSymbol, colI) => (
              <li key={colI}>
                <button onClick={() => handleUserSelection(rowI, colI)}>
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
