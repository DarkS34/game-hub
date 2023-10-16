import React, { useEffect, useState } from "react";
import StartGameButton from "../../components/StartGameButton/StartGameButton";
import "./TicTacToe.css";
import TicTacToeFigure from "../../components/TicTacToeFigure";

const TikTakToe = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [turn, setTurn] = useState("");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleStartClick = () => {
    setIsStarted(!isStarted);
  };

  const tttTurnIconStr = (turn) => {
    return `<svg class="ttt-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                  ${
                    turn === "X"
                      ? ` <line class="X-line" x1="110" y1="10" x2="10" y2="110" />
                          <line class="X-line" x1="10" y1="10" x2="110" y2="110" />`
                      : `<circle class="O-circle" cx="60" cy="60" r="50"/>`
                  }
              </svg>`;
  };

  const handleCellElection = (e) => {
    const cellNumber = e.target.classList[1]
      .split("-")[1]
      .split("")
      .map(Number);
    if (!board[cellNumber[0]][cellNumber[1]]) {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[cellNumber[0]][cellNumber[1]] = turn;
        return newBoard;
      });
      const cellElement = document.querySelector(
        `.cell-${cellNumber[0]}${cellNumber[1]}`
      );
      cellElement.innerHTML += tttTurnIconStr(turn);
    }
  };

  useEffect(() => {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setWinner(null);
    if (!isStarted) setTurn(parseInt(Math.random() * 2) === 0 ? "X" : "O");
  }, [isStarted]);

  useEffect(() => {
    const checkWinner = () => {
      const winningCombinations = [
        // Filas
        [
          [0, 0],
          [0, 1],
          [0, 2],
        ],
        [
          [1, 0],
          [1, 1],
          [1, 2],
        ],
        [
          [2, 0],
          [2, 1],
          [2, 2],
        ],
        // Columnas
        [
          [0, 0],
          [1, 0],
          [2, 0],
        ],
        [
          [0, 1],
          [1, 1],
          [2, 1],
        ],
        [
          [0, 2],
          [1, 2],
          [2, 2],
        ],
        // Diagonales
        [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
        [
          [0, 2],
          [1, 1],
          [2, 0],
        ],
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
          board[a[0]][a[1]] &&
          board[a[0]][a[1]] === board[b[0]][b[1]] &&
          board[a[0]][a[1]] === board[c[0]][c[1]]
        ) {
          setWinner(turn);
          document
            .querySelector(`.cell-${[a[0]]}${[a[1]]}`)
            .classList.add(`winner-cell-${turn}`);
          document
            .querySelector(`.cell-${[b[0]]}${[b[1]]}`)
            .classList.add(`winner-cell-${turn}`);
          document
            .querySelector(`.cell-${[c[0]]}${[c[1]]}`)
            .classList.add(`winner-cell-${turn}`);
          return false;
        }
      }
      if (!winner && board.flat().every((cell) => cell)) {
        setWinner("tie");
        return false;
      }
      return true;
    };
    if (checkWinner()) turn === "X" ? setTurn("O") : setTurn("X");
  }, [board]);

  return (
    <div className="ttt-container">
      <h1 className="ttt-title">TIC-TAC-TOE</h1>
      <StartGameButton handleClick={handleStartClick} gameStatus={isStarted} />
      {winner ? (
        winner !== "tie" ? (
          <div className="ttt-outcome-message-container">
            <p className="ttt-outcome-message">WINNER IS</p>
            <TicTacToeFigure cName="ttt-outcome-message-icon" fig={winner}/>
          </div>
        ) : (
          <div className="ttt-outcome-message-container">
            <p className="ttt-outcome-message">IT'S A TIE!</p>
          </div>
        )
        ) : isStarted ? (
          <div className="ttt-turn-message-container">
          <p className="ttt-turn-message">TURN OF</p>
          <TicTacToeFigure cName="ttt-turn-message-icon" fig={turn}/>
        </div>
      ) : (
        <p className="ttt-start-message">PRESS PLAY TO START!</p>
      )}
      {isStarted ? (
        <div className="ttt-game-container">
          {board.map((row, i) =>
            row.map((cell, j) => (
              <button
                key={`${i}-${j}`}
                onClick={handleCellElection}
                className={`board-cell cell-${i}${j}`}
                disabled={board[i][j] || winner}
              ></button>
            ))
          )}
        </div>
      ) : (
        <div className="ttt-game-container empty"></div>
      )}
    </div>
  );
};

export default TikTakToe;
