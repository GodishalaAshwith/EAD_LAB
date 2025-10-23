import { useEffect, useState } from "react";
import "./App.css";

function formatTime(ms) {
  const totalCs = Math.floor(ms / 10); // centiseconds
  const cs = totalCs % 100;
  const totalSeconds = Math.floor(totalCs / 100);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60);

  const pad = (n, len = 2) => String(n).padStart(len, "0");
  return `${pad(minutes)}:${pad(seconds)}.${pad(cs)}`;
}

function App() {
  const [elapsed, setElapsed] = useState(0); // milliseconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const start = performance.now() - elapsed;
    const id = setInterval(() => {
      setElapsed(Math.max(0, Math.floor(performance.now() - start)));
    }, 10); // update every 10ms (centisecond precision)
    return () => clearInterval(id);
  }, [running]);

  const handleStart = () => setRunning(true);
  const handlePause = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return (
    <div className="app">
      <h1>Stopwatch</h1>
      <div className="timer">{formatTime(elapsed)}</div>
      <div className="controls">
        {!running ? (
          <button onClick={handleStart} aria-label="Start stopwatch">
            Start
          </button>
        ) : (
          <button onClick={handlePause} aria-label="Pause stopwatch">
            Pause
          </button>
        )}
        <button
          onClick={handleReset}
          disabled={elapsed === 0}
          aria-label="Reset stopwatch"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
