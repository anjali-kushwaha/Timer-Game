import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(null);
  const dialog = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Stopping when the timer expires
  if (timeRemaining <= 0 && timer.current !== null) {
    clearInterval(timer.current);
    if (dialog.current !== null) dialog.current.openModal();
  }

  function handleReset() {
    if (timer.current !== null) {
        clearInterval(timer.current);
        timer.current = null;
      }
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    if (timer.current === null) {
      timer.current = setInterval(() => {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
      }, 10);
    }
  }

  function handleStop() {
    clearInterval(timer.current);
    if (dialog.current !== null) dialog.current.openModal();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime !== 1 && 's'}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? 'Stop' : 'Start'} challenge
          </button>
        </p>
        <p className={timeIsActive ? 'active' : undefined}>
          {timeIsActive ? 'Time is running....' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
