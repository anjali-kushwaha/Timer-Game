import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ targetTime, remaningTime, onReset }, ref) {
  const dialog = useRef();
 
  const userLost = remaningTime <= 0;
//   const formattedRemainingTime = (remaningTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      dialog.current.showModal();
    }
  }));

  // by default it is hidden
  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>0.19 seconds left.</strong></p>
      <form onSubmit={onReset}>
        <button type="submit">Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
