import React, { useState } from 'react'
import styles from './Form.module.css'
import validation from './validation'

export default function Form({login}) {

  let [userData, setUserData]= useState({
        username: '',
        password: ''
  })
  const [errors, setErrors]= useState({
    username: '',
    password: ''
})

  let handleImputChange=(e)=>{
    setUserData({
        ...userData,[e.target.name]: e.target.value
    })

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value
      })
    );
  }
  let handleSudmit=()=>{
    login(userData);
  }

  
    return (
    <div className={styles.div}>
        <form className={styles.form} onSubmit={handleSudmit}>
            <img className={styles.img} src ='https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png'></img>
            
            <label className={styles.label} htmlFor='username'>Email</label>
            <div className={styles.centerdiv}>
            <input 
                className={styles.input}
                type ="text"
                placeholder="algo@email.com"
                name="username"
                value={userData.username}
                onChange={handleImputChange}
            ></input>
            </div>
            

            <div className={styles.divb}>{errors.username ? <p className={styles.p} >{errors.username}</p>:undefined}</div>

            <label className={styles.label} htmlFor='password'>Password</label>
            <div className={styles.centerdiv}><input
                className={styles.input}
                type ="text"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleImputChange}
            ></input></div>

            <div>{errors.password ? <p className={styles.p} >{errors.password}</p>:undefined}</div>

            <div className={styles.divb} ><button  className={styles.btn}>Login</button></div>
            
        </form>
    </div>
  )
}
