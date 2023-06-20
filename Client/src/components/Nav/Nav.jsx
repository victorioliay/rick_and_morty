import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({onSearch, random}) => {
    
    return (
        <div className={style.navContainer}> 
            <div>
                <button className={style.buttonLink}>
                <NavLink to='/home' >Home </NavLink>
                </button>

                <button className={style.buttonLink}>
                <NavLink to='/about'>About </NavLink>
                </button>

                <button className={style.buttonLink}>
                <NavLink to='/favorites'>Favorites </NavLink>
                </button>
                <button className={style.random} onClick={random}>Add Random</button>
                
                <SearchBar onSearch={onSearch}/>
            </div>
        </div>
    )
}

export default Nav; 