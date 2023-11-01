import { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => {
    setIsEdit(prev => !prev);
  };

  return (
    <li>
      <span className="player">
        {!isEdit ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" required></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}> {isEdit ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
