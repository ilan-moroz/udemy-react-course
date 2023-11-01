import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combo';
import GameOver from './components/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = gameTurns => {
  let curPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') curPlayer = 'O';
  return curPlayer;
};

const deriveWinner = (gameBoard, players) => {
  let winner;

  for (const combo of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combo[0].row][combo[0].col];
    const secondSquare = gameBoard[combo[1].row][combo[1].col];
    const thirdSquare = gameBoard[combo[2].row][combo[2].col];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = players[firstSquare];
    }
  }
  return winner;
};

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleActivePlayer = (rowI, colI) => {
    // setActivePlayer(curPlayer => (curPlayer === 'X' ? 'O' : 'X'));

    setGameTurns(prevTurn => {
      let curPlayer = deriveActivePlayer(prevTurn);
      if (prevTurn.length > 0 && prevTurn[0].player === 'X') curPlayer = 'O';
      const updatedTurns = [
        { square: { row: rowI, col: colI }, player: curPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  };

  const handleNameChange = (symbol, newName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  const winner = deriveWinner(gameBoard, players);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
            changeName={handleNameChange}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
            changeName={handleNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} rematch={handleRematch} />
        )}
        <GameBoard onPlayerChange={handleActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
