import imageAvatar from './assets/avatar.svg'
import './PresentationCard.css'

let name ="Christina";

function PresentationCard() {
    return (
       <div className="presentation-card">
           <img src={imageAvatar} alt="Avatar" class="acatar" />
           <h1>
               Hola, soy { name } y estoy aprendiendo React
           </h1>
       </div>
    )
}

export default PresentationCard;