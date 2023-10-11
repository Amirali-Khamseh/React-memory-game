import { useEffect, useState } from 'react';
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
//States for the Users's choices 
const [choice1,setChoice1] = useState(null); 
const [choice2,setChoice2] = useState(null); 
//State for managing the number of cards to be previewed 
const [disabled,setDisabled]=useState(false);
//Duplicating cards and create the game's grid
const cardShuffler = ()=>{
  //The sort method shuffle the items when the result of Math.random() is a posetive intiger
  const shuffledCards = [...cardImages,...cardImages]
  .sort(()=>Math.random()-0.5)
  .map((card)=>({...card,id:Math.random()}))
  .map((card)=>({...card,matched:false}));
  setCards(shuffledCards)
  setTurns(0);
}
//Handeling the User's choices
const handleChoice =(card)=>{
 
  choice1 ? setChoice2(card):setChoice1(card);
}
//Comparing selected cards
useEffect(()=>{
  
  if(choice1 && choice2){
    setDisabled(true);
    if(choice1.src === choice2.src){
      setCards(prevCards =>{
        return prevCards.map(card=>{
          if(card.src===choice1.src){
            return {...card ,matched:true}
          }else{
            return card;
          }
        })
      })
      resetTurn();
    }else{
      setTimeout(()=> resetTurn(),500);
     
    }
  }
},[choice1,choice2])

// reset choices & increase turn
  const resetTurn = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false);
  }

  return (
    <div className="App">
       <h1>Memory Game</h1>
      <button onClick={cardShuffler}>New Game</button>
      <div className="card-grid">
    {cards.map((card)=>(<Card key={card.id} 
    card={card}
     handleChoice={handleChoice}
     flipped={card=== choice1 || card === choice2 ||card.matched===true}  disabled={disabled}>
    
    </Card>))}
        
      </div>
    </div>
  );
}

export default App;
