export function Dots() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90">
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 18 + 5}
            cy={row * 18 + 5}
            r="2"
            fill="#ABB2BF"
          />
        ))
      )}
    </svg>
  );
}

export function Square() {
  return (
    <svg width="110" height="110">
      <rect x="1" y="1" width="108" height="108" fill="none" stroke="#ABB2BF" />
    </svg>
  );
}

export function DoubleSquares() {
  return (
    <svg width="160" height="160">
      <rect x="10" y="50" width="70" height="70" fill="none" stroke="#C778DD" />

      <rect x="45" y="15" width="70" height="70" fill="none" stroke="#C778DD" />
    </svg>
  );
}
