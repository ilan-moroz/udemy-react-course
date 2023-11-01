import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleActivePlayer = () => {
    setActivePlayer(curPlayer => (curPlayer === 'X' ? 'O' : 'X'));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard player={activePlayer} onPlayerChange={handleActivePlayer} />
      </div>
    </main>
  );
}

export default App;
