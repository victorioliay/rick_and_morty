import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards, resetFavs} from "../../redux/actions";
import { useState} from "react";


const Favorites = ( ) => {

    const favorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch();
    
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true)    
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));    
    }

    const handleReset = () => {
        dispatch(resetFavs());    
    }

    return (
        <div> 
            <div>
                <select onChange={handleFilter}>
                    {["Male", "Female", "Genderless", "unknown"].map((gender) => (
                        <option value={gender}>{gender}</option>
                    ))}
                </select>
        
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <button onClick={handleReset}>Reset filters</button>
                <Cards characters={favorites} />
            </div>
        </div>
        
    )
};

export default Favorites;
