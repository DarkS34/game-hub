import { useEffect, useState } from "react";
import { makepuzzle, solvepuzzle } from "sudoku";
import "./Sudoku.css";
import StartGameButton from "../../components/StartGameButton/StartGameButton";
const Sudoku = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [solvedSudoku, setSolvedSudoku] = useState([]);
  const [initBoard, setInitBoard] = useState([]);
  const [outcome, setOutcome] = useState(null);
  const [isFilledSudoku, setIsFilledSudoku] = useState(false);

  const handleStartClick = () => {
    if (!isStarted) {
      const newBoard = makepuzzle();
      setSudokuBoard(newBoard);
      setInitBoard(newBoard);
      setSolvedSudoku(solvepuzzle(newBoard));
    } else {
      setSudokuBoard([]);
      setInitBoard([]);
      setOutcome(null);
    }
    setIsStarted(!isStarted);
  };

  const handleInputCellValueChange = (e) => {
    const value = parseInt(e.target.value);
    const modifiedSudokuBoard = [...sudokuBoard];
    const eBoardPos = e.target.getAttribute("data-key");
    if (Number.isInteger(value) && value !== 9) {
      if (e.target.value < 0 || e.target.value > 8) {
        const secondPosNum = parseInt(e.target.value.toString().split("")[1]);
        if (secondPosNum !== 9) {
          e.target.value = secondPosNum;
          modifiedSudokuBoard[eBoardPos] = secondPosNum;
        }
      } else {
        modifiedSudokuBoard[eBoardPos] = value;
      }
    } else if (!e.target.value) {
      modifiedSudokuBoard[eBoardPos] = null;
      e.target.value = null;
    }
    setSudokuBoard(modifiedSudokuBoard);
  };

  const handleInputCellClick = (e) => {
    e.target.setSelectionRange(e.target.value.length, e.target.value.length);
  };

  const handleCheck = () => {
    if (!sudokuBoard.every((e, i) => e === solvedSudoku[i])) {
      setOutcome(false);
      setTimeout(() => setOutcome(null), 3000);
    } else {
      setOutcome(true);
    }
  };

  const handleSolve = () => {
    setSudokuBoard([...solvedSudoku]);
    document.querySelectorAll(".sudoku-cell").forEach((cell) => {
      cell.disabled = true;
    });
    setOutcome("solved");
  };

  const checkFilledSudokuBoard = () => {
    for (let i = 0; i < sudokuBoard.length; i++) {
      if (typeof sudokuBoard[i] !== "number") {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    setIsFilledSudoku(!checkFilledSudokuBoard());
  }, [sudokuBoard]);

  useEffect(() => {
    document.querySelectorAll(".sudoku-cell").forEach((cell, index) => {
      cell.style.animationDelay = `${0.02 * index}s`;
    });
  }, [initBoard]);

  return (
    <div className="sudoku-container">
      <h1 className="sudoku-title">SUDOKU</h1>
      <StartGameButton handleClick={handleStartClick} gameStatus={isStarted} />
      {isStarted ? (
        outcome !== null ? (
          outcome === "solved" ? (
            <p className="outcome-message">THIS IS THE SOLVED SUDOKU.</p>
          ) : !outcome ? (
            <p className="outcome-message">
              SOME OF THE CELLS ARE WRONG, TRY AGAIN!
            </p>
          ) : (
            <p className="outcome-message">ALL CELLS ARE RIGHT, YOU WON!</p>
          )
        ) : (
          <div className="sudoku-check-solve-container">
            <button
              disabled={isFilledSudoku}
              onClick={handleCheck}
              className="sudoku-check"
            >
              CHECK
            </button>
            <button onClick={handleSolve} className="sudoku-solve">
              SOLVE
            </button>
          </div>
        )
      ) : (
        <p className="sudoku-start-message">PRESS PLAY TO START!</p>
      )}
      <div className="sudoku-board">
        {sudokuBoard.map((cell, i) => (
          <input
            type="text"
            inputMode="numeric"
            key={i}
            data-key={i}
            className="sudoku-cell"
            disabled={initBoard[i] !== null ? true : false}
            min={0}
            max={8}
            value={cell !== null ? cell : ""}
            onChange={handleInputCellValueChange}
            onClick={handleInputCellClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Sudoku;
