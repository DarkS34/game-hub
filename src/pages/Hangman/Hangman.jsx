import { useEffect, useState } from "react";
import "./Hangman.css";
import StartGameButton from "../../components/StartGameButton/StartGameButton";
import { hangmanWords } from "./hangmanWords";

const Hangman = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [word, setWord] = useState([null, null, null, null, null]);
  const [lettersToShow, setLettersToShow] = useState([]);
  const [outcome, setOutcome] = useState(null);
  const [score, setScore] = useState(10);
  const qwertyKeys = "qwertyuiopasdfghjklzxcvbnm".split("");

  const handleStartClick = () => {
    if (!isStarted) {
      setWord(
        hangmanWords[Math.floor(Math.random() * hangmanWords.length)].split("")
      );
      setScore(10);
    } else {
      setOutcome(null);
      setWord([null, null, null, null, null]);
      setLettersToShow([]);
    }
    setIsStarted(!isStarted);
  };

  const findLetterIndexes = (letter) => {
    const indexes = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        indexes.push(i);
      }
    }
    return indexes;
  };

  const updateLetters = (letterIndexes) => {
    const updatedLettersToShow = [...lettersToShow];
    letterIndexes.forEach((index) => {
      updatedLettersToShow[index] = true;
    });
    return updatedLettersToShow;
  };

  const handleKey = (e) => {
    const letterIndexes = findLetterIndexes(e.target.value);
    if (letterIndexes.length > 0) {
      const updatedLetters = updateLetters(letterIndexes);
      setLettersToShow(updatedLetters);
      if (updatedLetters.every((value) => value === true)) {
        setOutcome("v");
      }
    } else {
      setScore(score - 1);
    }
    e.target.classList.add("clicked-key");
    e.target.disabled = true;
  };

  useEffect(() => {
    if (isStarted) {
      const initialLettersToShow = Array.from(
        { length: word.length },
        () => false
      );
      setLettersToShow(initialLettersToShow);
    }
  }, [word]);

  useEffect(() => {
    if (score == 0) {
      setOutcome("d");
    }
  }, [score]);

  return (
    <div className="hangman-container">
      <h1 className="hangman-title">HANGMAN</h1>
      <StartGameButton handleClick={handleStartClick} gameStatus={isStarted} />
      {outcome ? (
        outcome === "v" ? (
          <p className="outcome-message">WOU WON!</p>
        ) : (
          <p className="outcome-message">YOU LOST!</p>
        )
      ) : isStarted ? (
        <p className="tries-message">
          YOU HAVE <b>{score}</b> TRIES TO GUESS
        </p>
      ) : (
        <p className="hangman-start-message">PRESS PLAY TO START!</p>
      )}
      <div className="hangman-letters-container">
        {word.map((l, i) => (
          <span
            key={i}
            className={`hangman-letter ${
              lettersToShow[i] ? "visible-letter" : null
            }`}
          >
            {lettersToShow[i] ? l : null}
          </span>
        ))}
      </div>
      <div className=""></div>

      <div className="keyboard-container">
        {isStarted
          ? qwertyKeys.map((k) => (
              <button
                value={k}
                onClick={handleKey}
                className="keyboard-key"
                key={k}
                disabled={outcome != null}
              >
                {k}
              </button>
            ))
          : null}
      </div>
    </div>
  );
};

export default Hangman;
