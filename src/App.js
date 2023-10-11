import { useState } from 'react';
import Card from './componenets/Card'
import './App.css';

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]


function App() {
const [cards,setCards] = useState([]); 
const [turns,setTurns] = useState(0); 
//Duplicating cards and create the game's grid
const cardShuffler = ()=>{
  //The sort method shuffle the items when the result of Math.random() is a posetive intiger
  const shuffledCards = [...cardImages,...cardImages]
  .sort(()=>Math.random()-0.5)
  .map((card)=>({...card,id:Math.random()}));
  setCards(shuffledCards)
  setTurns(0);
}

  return (
    <div className="App">
       <h1>Magic Match</h1>
      <button onClick={cardShuffler}>New Game</button>
      <div className="card-grid">
    {cards.map((card)=>(<Card key={card.id} card={card}></Card>))}
        
      </div>
    </div>
  );
}

export default App;
