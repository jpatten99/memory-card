import React, { useState, useEffect } from "react";
import "./Card.css"


function Card(props) {
  return (
    <div>
      <img src={props.src} alt="Ivan" className="ivan" id={props.id} onClick={ () => {
          props.isCardSelected(props.id);
          props.shuffleCards();
      }}>
      </img>
    </div>
  )
}

export default Card;