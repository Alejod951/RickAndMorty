import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';


function Nav({onSearch, rNd}) {
  let {nav, rigth,btn} = styles;  
  return (
    <div className={nav}>
            <Link to={PATHROUTES.ABOUT}>About</Link>
            <Link to={PATHROUTES.FAVORITES}>Favorites</Link>
            <Link to={PATHROUTES.HOME}>Home</Link>
            <button className={btn} onClick={()=>{rNd([Math.floor(Math.random() * 826) + 1])}}>Ranbom</button>
            <SearchBar className={styles.search} onSearch={onSearch} />    
    </div>
  )
}

export default Nav