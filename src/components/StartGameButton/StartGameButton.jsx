import React from "react";
import "./StartGameButton.css";

const StartGameButton = ({ handleClick, gameStatus }) => {
  return (
    <button type="button" className="start-button" onClick={handleClick}>
      {!gameStatus ? "PLAY" : "RESET"}
    </button>
  );
};

export default StartGameButton;
