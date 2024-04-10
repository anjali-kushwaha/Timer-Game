import { useState, useRef } from "react";

export default function Player() {
   
    const playerName =useRef()
    //state for player name
    const [enteredPlayerName, setEnteredPlayerName]=useState(null);
    

    function handleClick (){
        setEnteredPlayerName(playerName.current.value);
        
        //clear the input after writting
        playerName.current='';
    }

    return (
    <section id="player" className="content">
      <h1>THE <em>ALMOST</em> THE FINAL COUNTDOWN</h1>
      <p className="header">Stop the timer once you estimate that time is (almost) up</p>
        <h2>Welcome { enteredPlayerName ??'unknown entity'}</h2>
        <p>
          <input ref={playerName}  type="text" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    );
  }
  