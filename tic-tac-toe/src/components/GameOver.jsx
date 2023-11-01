const GameOver = ({ winner, rematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Its a Draw!</p>}
      <p>
        <button onClick={rematch}>rematch?</button>
      </p>
    </div>
  );
};

export default GameOver;
