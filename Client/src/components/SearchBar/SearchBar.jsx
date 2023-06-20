import style from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      event.preventDefault();
      setId(event.target.value);
   }  

   return (
      <div className={style.search}>
         <input className={style.input} type='search' onChange={handleChange} value={id} placeholder='Insert ID' />
         <button className={style.button} onClick={() =>{onSearch(id); setId('')}}  >Add</button> 
      </div>
   );
   }

export default SearchBar;