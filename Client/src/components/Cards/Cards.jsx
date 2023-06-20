import Card from '../Card/Card';
import style from './Cards.module.css';

function Cards(props) {
   const {characters, onClose} = props
   
   return ( 
      <div className={style.cards}>
         {characters?.map((character) => (
                  <Card key= {character.id} character={character} onClose={onClose} />
            ))}
      </div>
   )
}

export default Cards;