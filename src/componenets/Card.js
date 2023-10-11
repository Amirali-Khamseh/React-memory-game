import './Card.css';
const Card = ({card}) =>{
    return(
   <div className='card'>
      <div>
        <img className='front' src={card.src} alt="game-cards" />
        <img className='back' src='/img/cover.png' alt="cover of game-cards" />
      </div>
    </div>)

}
export default Card ;