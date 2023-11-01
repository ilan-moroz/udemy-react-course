import { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const editHandler = () => {
    setIsEdit(prev => !prev);
  };

  const changeHandler = e => {
    setPlayerName(e.target.value);
  };

  return (
    <li>
      <span className="player">
        {!isEdit ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={changeHandler}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}> {isEdit ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
