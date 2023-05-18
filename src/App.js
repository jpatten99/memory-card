import './App.css';
import React, { useState, useEffect } from "react";
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';


function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [sources, setSources] = useState([
    {src: "img/ivan1.JPG", selected: false, id: 1},
    {src: "img/ivan2.jpg", selected: false, id: 2},
    {src: "img/ivan3.jpg", selected: false, id: 3},
    {src: "img/ivan4.jpg", selected: false, id: 4},
    {src: "img/ivan5.JPG", selected: false, id: 5},
    {src: "img/ivan6.JPG", selected: false, id: 6},
    {src: "img/ivan7.JPG", selected: false, id: 7},
    {src: "img/ivan8.jpg", selected: false, id: 8},
    {src: "img/ivan9.JPG", selected: false, id: 9},
    {src: "img/ivan10.JPG", selected: false, id: 10},
    {src: "img/ivan11.JPG", selected: false, id: 11},
    {src: "img/ivan12.jpg", selected: false, id: 12},
    {src: "img/ivan13.jpg", selected: false, id: 13},
    {src: "img/ivan14.jpg", selected: false, id: 14},
    {src: "img/ivan15.JPG", selected: false, id: 15},
    {src: "img/ivan16.jpg", selected: false, id: 16},
    {src: "img/ivan17.JPG", selected: false, id: 17},
    {src: "img/ivan18.jpg", selected: false, id: 18},
    {src: "img/ivan19.JPG", selected: false, id: 19},
    {src: "img/ivan20.jpg", selected: false, id: 20}
  ]);

  useEffect(() => {
    if(currentScore > highScore){
      setHighScore(currentScore);
    }
  }, [currentScore, highScore])

  const shuffleCards = () => {
    let shuffledArray = sources
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    setSources(shuffledArray);
  }
  const isCardSelected = (id) => {
    let targetCard = sources.filter((x) => {return x.id === id});
    if(targetCard[0].selected === true){
      setCurrentScore(0);
      let updatedArray = sources;
      // eslint-disable-next-line array-callback-return
      updatedArray.map((source) => {
        source.selected = false;
      })
      console.log(updatedArray);
      setSources(updatedArray);
      console.log("test");
    }
    else{
      setCurrentScore(currentScore + 1);
      let updatedArray = sources;
      // eslint-disable-next-line array-callback-return
      updatedArray.map((source) => {
        if (source.id === id) {
          source.selected = true;
        }
      })
      console.log(updatedArray);
      setSources(updatedArray);
    }   
  } 
  return (
    <div id= "main-container">
      <div id='scoreboard-container'>
        <Scoreboard currentScore = {currentScore} highScore = {highScore} />
      </div>
      <div id="card-container">
        <div onClick={ () => {
          isCardSelected(sources[0].id);
          shuffleCards();}}>
        <Card src = {sources[0].src} id = {sources[0].id} />
        </div>
        
        <div onClick={ () => {
          isCardSelected(sources[1].id);
          shuffleCards();}}>
        <Card src = {sources[1].src} id = {sources[1].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[2].id);
          shuffleCards();}}>
        <Card src = {sources[2].src} id = {sources[2].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[3].id);
          shuffleCards();}}>
        <Card src = {sources[3].src} id = {sources[3].id} />
        </div>
        <div onClick={ () => {
          isCardSelected(sources[4].id);
          shuffleCards();}}>
        <Card src = {sources[4].src} id = {sources[4].id} />
        </div>
        
        <div onClick={ () => {
          isCardSelected(sources[5].id);
          shuffleCards();}}>
        <Card src = {sources[5].src} id = {sources[5].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[6].id);
          shuffleCards();}}>
        <Card src = {sources[6].src} id = {sources[6].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[7].id);
          shuffleCards();}}>
        <Card src = {sources[7].src} id = {sources[7].id} />
        </div>
        <div onClick={ () => {
          isCardSelected(sources[8].id);
          shuffleCards();}}>
        <Card src = {sources[8].src} id = {sources[8].id} />
        </div>
        
        <div onClick={ () => {
          isCardSelected(sources[9].id);
          shuffleCards();}}>
        <Card src = {sources[9].src} id = {sources[9].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[10].id);
          shuffleCards();}}>
        <Card src = {sources[10].src} id = {sources[10].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[11].id);
          shuffleCards();}}>
        <Card src = {sources[11].src} id = {sources[11].id} />
        </div>
        <div onClick={ () => {
          isCardSelected(sources[12].id);
          shuffleCards();}}>
        <Card src = {sources[12].src} id = {sources[12].id} />
        </div>
        
        <div onClick={ () => {
          isCardSelected(sources[13].id);
          shuffleCards();}}>
        <Card src = {sources[13].src} id = {sources[13].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[14].id);
          shuffleCards();}}>
        <Card src = {sources[14].src} id = {sources[14].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[15].id);
          shuffleCards();}}>
        <Card src = {sources[15].src} id = {sources[15].id} />
        </div>
        <div onClick={ () => {
          isCardSelected(sources[16].id);
          shuffleCards();}}>
        <Card src = {sources[16].src} id = {sources[16].id} />
        </div>
        
        <div onClick={ () => {
          isCardSelected(sources[17].id);
          shuffleCards();}}>
        <Card src = {sources[17].src} id = {sources[17].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[18].id);
          shuffleCards();}}>
        <Card src = {sources[18].src} id = {sources[18].id} />
        </div>

        <div onClick={ () => {
          isCardSelected(sources[19].id);
          shuffleCards();}}>
        <Card src = {sources[19].src} id = {sources[19].id} />
        </div>
      </div>
    </div>
  )
}

export default App;
