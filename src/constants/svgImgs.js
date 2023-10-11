export const tttTurnIconStr = (turn) => {
  return `<svg class="ttt-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                ${
                  turn === "X"
                    ? ` <line class="X-line" x1="110" y1="10" x2="10" y2="110" />
                        <line class="X-line" x1="10" y1="10" x2="110" y2="110" />`
                    : `<circle class="O-circle" cx="60" cy="60" r="50"/>`
                }
            </svg>`;
};