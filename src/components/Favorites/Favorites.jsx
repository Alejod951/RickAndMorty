import { orderCards, filteCards } from '../../redux/actions'
import { useDispatch, connect } from 'react-redux'
import { useState } from 'react';
import styles from './Favorites.module.css'
import Card from '../Card/Card'


const Favorites = (props) => {
    const dispatch = useDispatch();
    const { myFavorites } = props;
    const [aux, setAux]= useState(false);

    const handlerOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux)
    }
    const handlerFilter = (e) => {

        dispatch(filteCards(e.target.value));
        setAux(!aux)
    }



    return (
        <div >
            <div className={styles.centerdiv}>
            <select className={styles.selectcontainer} name="" id="" onChange={handlerOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Desendente</option>
            </select>
            <select className={styles.selectcontainer} name="" id="" onChange={handlerFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            </div>
            
            <div className={styles.div}>
            {myFavorites.map((char) => {
                return (
                    <div>
                        <Card
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            status={char.status}
                            gender={char.gender}
                            image={char.image}
                        />
                    </div>
                )
            })
            }
            </div>
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    };
  };
  
  export default connect(mapStateToProps, null)(Favorites);
