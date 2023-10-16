import React from "react";
import "./ChooseGame.css";
import { Link } from "react-router-dom";
import { TictactoeSVG, HangmanSVG, SudokuSVG } from "../../components/gamesSVG";

const ChooseGame = () => {
  return (
    <>
      <div className="welcome-msg-container">
        <p className="welcome-msg-1">Welcome</p>
        <p className="welcome-msg-2">Ready to play?</p>
      </div>
      <div className="games-container">
        <Link className="game-link" to={"tictactoe"}>
          <p className="game-title">Tic-Tac-Toe</p>
          <TictactoeSVG />
        </Link>
        <Link className="game-link" to={"hangman"}>
          <p className="game-title">Hangman</p>
          <HangmanSVG />
        </Link>
        <Link className="game-link" to={"sudoku"}>
          <p className="game-title">Sudoku</p>
          <SudokuSVG />
        </Link>
      </div>
    </>
  );
};

export default ChooseGame;
