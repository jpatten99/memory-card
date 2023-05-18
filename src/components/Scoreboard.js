import React from "react";

function Scoreboard(props) {
  return(
    <div>
      <h2>Current Score: {props.currentScore}</h2>
      <h3>High Score: {props.highScore}</h3>
    </div>
  )
}

export default Scoreboard;