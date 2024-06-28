import { forwardRef } from "react";
//we wrap funin forwardRef
const ResultModal= forwardRef(
 function ResultModal({ targetTime, userLost, formattedRemainingTime, score}, ref) {
  return (
    // build in dialog hidden by default so we put open
    <dialog ref={ref} className="result-modal" >
      {userLost ? <h2>You lost</h2> : <h2>You score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped te timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})
export default ResultModal; 