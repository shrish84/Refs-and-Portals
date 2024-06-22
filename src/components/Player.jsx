import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const[enteredPlayerName, setEnteredPlayerName]= useState('');
  const playerName= useRef();
  const handleClick=()=>{
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName?enteredPlayerName:'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
//if enteredPlayerName is truthy display that otherwise display unknown entity