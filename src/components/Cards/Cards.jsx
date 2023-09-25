import React from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.css'


export default function  Cards ({characters,onClose}) {
  return (
  
   <div className={styles.div}>
   {
      characters.map(({id, name, species, gender, image, origin}) => 
      
         <Card 
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            origin = {origin.name}
            image={image}
            onClose={onClose}
         />
      )
   }
</div>
  )
}

