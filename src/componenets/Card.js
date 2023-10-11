import './Card.css';
const Card = ({card,handleChoice ,flipped,disabled}) =>{
    const handleClick = ()=>{
        if(!disabled){
            handleChoice(card)
        }
           
    }
    return(
   <div className='card'>
      <div className={flipped?'flipped':''}>
        <img className='front' src={card.src} alt="game-cards" />
        <img className='back'onClick={handleClick} src='/img/cover.png' alt="cover of game-cards" />
      </div>
    </div>)

}
export default Card ;