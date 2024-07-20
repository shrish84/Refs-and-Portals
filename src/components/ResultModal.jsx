import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

//we wrap funin forwardRef
const ResultModal= forwardRef(
 function ResultModal({ targetTime, userLost, formattedRemainingTime, score}, ref) {
  const dialog= useRef();

  useImperativeHandle(ref, () => {
    return {
          open(){
            dialog.current.showModal();
          }
    };
  });//fun will return object, open is custom func, showModal is built-in
  
  return createPortal(
    // build in dialog hidden by default so we put open
    <dialog ref={dialog} className="result-modal" >
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
    </dialog>,
    document.getElementById("modal")
  );
})
export default ResultModal; 