export const TictactoeSVG = () => {
  return (
    <svg
      className="game-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <g>
        <circle className="o-figure" cx="24" cy="24" r="10.5" />
        <circle className="o-figure" cx="64" cy="64" r="10.5" />
        <circle className="o-figure" cx="104" cy="64" r="10.5" />
        <circle className="o-figure" cx="64" cy="104" r="10.5" />
        <circle className="o-figure" cx="104" cy="24" r="10.5" />
      </g>
      <g>
        <line className="x-figure" x1="34.5" y1="53.5" x2="13.5" y2="74.5" />
        <line className="x-figure" x1="13.5" y1="53.5" x2="34.5" y2="74.5" />
        <line className="x-figure" x1="74.5" y1="13.5" x2="53.5" y2="34.5" />
        <line className="x-figure" x1="53.5" y1="13.5" x2="74.5" y2="34.5" />
        <line className="x-figure" x1="114.5" y1="93.5" x2="93.5" y2="114.5" />
        <line className="x-figure" x1="93.5" y1="93.5" x2="114.5" y2="114.5" />
        <line className="x-figure" x1="34.5" y1="93.5" x2="13.5" y2="114.5" />
        <line className="x-figure" x1="13.5" y1="93.5" x2="34.5" y2="114.5" />
      </g>

      <g>
        <line className="ttt-lines" x1="44" y1="124" x2="44" y2="4" />
        <line className="ttt-lines" x1="84" y1="124" x2="84" y2="4" />
        <line className="ttt-lines" x1="4" y1="44" x2="124" y2="44" />
        <line className="ttt-lines" x1="4" y1="84" x2="124" y2="84" />
      </g>
    </svg>
  );
};

export const HangmanSVG = () => {
  return (
    <svg
      className="game-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <line className="hangman-structure" x1="4" y1="124" x2="124" y2="124" />
      <polyline
        className="hangman-structure"
        points="23.2 124 23.2 4 94.2 4 94.2 30.8"
      />
      <line className="hangman-structure" x1="50" y1="4" x2="23.2" y2="30.8" />
      <circle className="hangman-stickman" cx="94.2" cy="41.6" r="10.8" />
      <polyline
        className="hangman-stickman"
        points="94.2 52.4 94.2 84.13 77.17 101.17"
      />
      <line
        className="hangman-stickman"
        x1="94.2"
        y1="84.13"
        x2="111.25"
        y2="101.18"
      />
      <polyline
        className="hangman-stickman"
        points="77.17 69.8 94.2 58.3 111.25 69.8"
      />
    </svg>
  );
};

export const SudokuSVG = () => {
  return (
    <svg
      className="game-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <line
        className="sudoku-board-outline"
        x1="4"
        y1="124"
        x2="124"
        y2="124"
      />
      <line
        className="sudoku-board-outline"
        x1="124"
        y1="4"
        x2="124"
        y2="124"
      />
      <line className="sudoku-board-outline" x1="4" y1="4" x2="124" y2="4" />
      <line className="sudoku-board-outline" x1="4" y1="4" x2="4" y2="124" />

      <line className="sudoku-board-inside" x1="44" y1="14" x2="44" y2="114" />
      <line className="sudoku-board-inside" x1="14" y1="44" x2="114" y2="44" />
      <line className="sudoku-board-inside" x1="84" y1="14" x2="84" y2="114" />
      <line className="sudoku-board-inside" x1="14" y1="84" x2="114" y2="84" />

      <text className="sudoku-numbers" transform="translate(17.5 32.5)">
        0
      </text>
      <text className="sudoku-numbers" transform="translate(17.5 112.5)">
        1
      </text>
      <text className="sudoku-numbers" transform="translate(57 32.5)">
        2
      </text>
      <text className="sudoku-numbers" transform="translate(57 72.5)">
        3
      </text>
      <text className="sudoku-numbers" transform="translate(96.5 72.5)">
        4
      </text>
      <text className="sudoku-numbers" transform="translate(96.5 32.5)">
        5
      </text>
      <text className="sudoku-numbers" transform="translate(17.5 72.5)">
        6
      </text>
      <text className="sudoku-numbers" transform="translate(57 112.5)">
        7
      </text>
      <text className="sudoku-numbers" transform="translate(96.5 112.5)">
        8
      </text>
    </svg>
  );
};
