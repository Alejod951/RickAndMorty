import React, { useState } from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav } from '../../redux/actions'
import { connect } from 'react-redux';

export const Card = (props) => {
  const {
    name,
    species,
    gender,
    status,
    image,
    id,
    onClose,
    addFav,
    removeFav
  } = props;

  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav)
  }

  return (
    <div className={styles.div}>
      {
        isFav ? (
          <button className={styles.butonyf} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={styles.butonnf} onClick={handleFavorite}>🤍</button>
        )
      }
      <button className={styles.buton} onClick={() => onClose(id)} >X</button>
      <Link to={`/details/${id}`}><h2 className={styles.name}>{name}</h2></Link>
      <h2 className={styles.name}>{species}</h2>
      <h2 className={styles.name}>{gender}</h2>
      <h2 className={styles.name}>{status}</h2>
      <img className={styles.border} src={image} alt='' />
    </div>
  )
}

const mapDispatchToProms = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(addFav(id));
    },
  }
}

export default connect(null, mapDispatchToProms)(Card);