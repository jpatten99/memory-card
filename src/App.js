import './App.css';
import React, { useState, useEffect } from "react";
import Card from './components/Card';


function App() {
  // const [color, setColor] = useState("black");


  // useEffect(() => {
  //   const changeColorOnClick = () => {
  //     if (color === "black") {
  //       setColor("red");
  //     } else {
  //       setColor("black");
  //     }
  //   };
    
  //   document.addEventListener("click", changeColorOnClick);

  //   return () => {
  //     document.removeEventListener("click", changeColorOnClick);
  //   };
  // }, [color]);

  // return (
  //   <div>
  //     <div
  //       id="myDiv"
  //       style={{
  //         color: "white",
  //         width: "100px",
  //         height: "100px",
  //         position: "absolute",
  //         left: "50%",
  //         top: "50%",
  //         backgroundColor: color,
  //       }}
  //     >
  //       This div can change color. Click on me!
  //     </div>
  //   </div>
  // );
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [sources, setSources] = useState([{src: "img/ivan1.jpg", selected: false, id: 1},
  {src: "img/ivan2.jpg", selected: false, id: 2},
  {src: "img/ivan3.jpg", selected: false, id: 3},
  {src: "img/ivan4.jpg", selected: false, id: 4}]);


  const compareScores = () => {
    if(currentScore > highScore){
      setHighScore(currentScore);
    }
  }

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  }

  const resetCurrentScore = () => {
    setCurrentScore(0);
  }

  const resetSelectedItems = () => {
    setSources([{src: "img/ivan1.jpg", selected: false, id: 1},
    {src: "img/ivan2.jpg", selected: false, id: 2},
    {src: "img/ivan3.jpg", selected: false, id: 3},
    {src: "img/ivan4.jpg", selected: false, id: 4}])
  }

  const isCardSelected = (id) => {
    //find the card that is clicked
    let targetCard = sources.filter((x) => {return x.id === id});
    //if card has already been selected, game is over, reset the score and make all cards unselected
    if(targetCard[0].selected === true){
      resetCurrentScore();
      resetSelectedItems();
    }
    //if card hasn't already been selected, increase score and possibly increase high score
    else{
      incrementCurrentScore();
      compareScores();
    }
    //finally, make card selected
    let updatedArray = sources.map((source) => {
      if (source.id === id) {
        source.selected = true;
      }
    })
    setSources(updatedArray);
  }

  const shuffleCards = () => {
    let shuffledArray = sources
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    setSources(shuffledArray);
  }

  return (
    <div>
      <div>

      </div>
      <div id="card-container">
        <Card src = {sources[0].src} shuffleCards = {shuffleCards} isCardSelected = {isCardSelected} id= {sources[0].id}/>
        <Card src = {sources[1].src} shuffleCards = {shuffleCards} isCardSelected = {isCardSelected} id= {sources[1].id}/>
        <Card src = {sources[2].src} shuffleCards = {shuffleCards} isCardSelected = {isCardSelected} id= {sources[2].id}/>
        <Card src = {sources[3].src} shuffleCards = {shuffleCards} isCardSelected = {isCardSelected} id= {sources[3].id}/>
      </div>
    </div>
  )
}

export default App;
