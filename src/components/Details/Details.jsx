import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import styles from './Details.module.css'

function Details() {
  const [character, setCharacter] = useState([])
  const {id} = useParams()


  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);


  return (
    <div>
    <div className={styles.div}>
     {/* <button className={styles.buton} onClick={()=>onClose(id)} >X</button> */}
    <h2 className={styles.name}>{character?.name}</h2>
   <h2 className={styles.name}>{character?.species}</h2>
   <h2 className={styles.name}>{character?.gender}</h2>
   <h2 className={styles.name}>{character?.status}</h2>
   <h2 className={styles.name}>{character.origin?.name}</h2>
   
   <img className={styles.border} src={character?.image} alt='' /> 
</div>
</div>
  )
}

export default Details
