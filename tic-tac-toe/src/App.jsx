import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

const deriveActivePlayer = gameTurns => {
  let curPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') curPlayer = 'O';
  return curPlayer;
};

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onPlayerChange={handleActivePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
