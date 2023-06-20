import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {
   
   const {character, onClose, addFav, removeFav, myFavorites} = props
   const {id, name, species, gender, image} = character
   
   const [isFav, setIsFav] = useState(false);
   const [closeButton, setCloseButton] = useState(true);

   useEffect(() => {
      if (!onClose) {
         setCloseButton(false);
      }
   }, [])

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   } 
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card}>
         <div className={style.containerImg}>
            <img src={image} alt={name} className={style.img} /> 
            <button className={style.favButton} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
            { closeButton && <button className={style.closeButton} onClick= {() => onClose(id)}>X</button>}
         </div>

         <div>
            <Link to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
            </Link>
         </div>

         <div className={style.atributes}>
            <h2> {species} </h2>
            <h2> {gender} </h2>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps, 
   mapDispatchToProps
)(Card);