import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

function TimeChallenge({ title, targetTime }) {
  const timer= useRef();
  const dialog= useRef();
  const[timeRemaining, setTimeRemaining]= useState(targetTime*1000);

  //this build in show moodal helps backdrop to show and make modal visible
  const timeIsActive= timeRemaining > 0 && timeRemaining < targetTime*1000;
  
  if(timeRemaining<=0){
    clearInterval(timer.current);
    setTimeRemaining(targetTime*1000);
    dialog.current.open();
  }//we manually stop timer because we didn't win, we're calling open from here in resultmodal

  function handleStart() {
    timer.current= setInterval(() => {
      setTimeRemaining(prevTimeRemaining=> prevTimeRemaining-10);
    }, 10);//triggers after every 10 miliseconds
  }

  function handleStop(){
    dialog.current.open();
    clearInterval(timer.current);//needs id of that timer to stop the timer and it is returned by pointer, if this called earlier than setTimerExpired will remain false
  }

  const userLost= timeRemaining<=0;
  const formattedRemainingTime = (timeRemaining/1000).toFixed(2);
  const score= Math.round((1-timeRemaining/(targetTime*1000))*100);
  return (
    <>
     <ResultModal ref={dialog} targetTime={targetTime} userLost={userLost} formattedRemainingTime={formattedRemainingTime} score={score}/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeIsActive? handleStop: handleStart}>
          {timeIsActive ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeIsActive ? "active" : undefined}>
        {timeIsActive ? "Time is running..." : "Timer Inactive"}
      </p>
    </section>
    </>
  );
}

export default TimeChallenge;
//we make timer a ref as it is not directly updating the UI means it dose not change any state