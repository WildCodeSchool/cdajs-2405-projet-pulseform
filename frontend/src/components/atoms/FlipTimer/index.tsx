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
  const [min1, min2, , sec1, sec2] = formatted;

  return (
    <div className="flip-clock">
      {[min1, min2, ":", sec1, sec2].map((char) =>
        char === ":" ? (
          <div key="colon" className="flip-clock__colon">
            :
          </div>
        ) : (
          <div key={char} className="flip-clock__digit">
            {char}
          </div>
        ),
      )}
    </div>
  );
};

export default FlipTimer;
