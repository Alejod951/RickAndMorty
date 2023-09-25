import React from "react";
import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   let [character, setCharacter] = useState('');

   const handleChange = (e)=>{
      setCharacter(e.target.value);
      console.log(character)
   };

   return (
      <div>
         <input type='search'className={styles.input} onChange={handleChange} value={character} />
         <button className={styles.btn} onClick={()=>{onSearch(character)}}>Agregar</button>
      </div>
   );
}


