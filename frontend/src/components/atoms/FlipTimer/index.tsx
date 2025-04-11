import "./FlipTimer.scss";

type FlipTimerType = {
  seconds: number;
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

const FlipTimer = ({ seconds }: FlipTimerType) => {
  const formatted = formatTime(seconds);
  const digits = [
    { id: "min1", char: formatted[0] },
    { id: "min2", char: formatted[1] },
    { id: "colon", char: ":" },
    { id: "sec1", char: formatted[3] },
    { id: "sec2", char: formatted[4] },
  ];

  return (
    <div className="flip-clock">
      {digits.map(({ id, char }) =>
        char === ":" ? (
          <div key={id} className="flip-clock__colon">
            {char}
          </div>
        ) : (
          <div key={id} className="flip-clock__digit">
            {char}
          </div>
        ),
      )}
    </div>
  );
};

export default FlipTimer;
