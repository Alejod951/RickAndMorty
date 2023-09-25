import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites'
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Details from './components/Details/Details';
import PATHROUTES from './helpers/PathRoutes.helper';
import Form from './components/Forms/Form';


function App() {
   let [characters, setCharacters] = useState([]);
   let [access, setAccess] = useState(false);
   const navegation = useNavigate();
   const location = useLocation();

   useEffect(() => {
      !access && navegation('/');
   }, [access]);

   const username = 'a';
   const password = 'a'

   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navegation('/home');
      } else { window.alert("pa donde mas ?") }
   }

   const hndleRandon = (rNd) => {
      // Comparamos el valor actual con el siguiente valor
      axios(`https://rickandmortyapi.com/api/character/${rNd}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      });
   }
   const hndleSearch = (characterID) => {

      if (characterID < 826 || characterID < 0) {
         // Hacemos algo si los valores son iguales
         axios(`https://rickandmortyapi.com/api/character/${characterID}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         });


      } else {
         window.alert('el id de personaje no existe o estas ingresado valores no validos, rango de id es 1 - 826');
      }
   }

   const hndleOnClosed = (id) => setCharacters((prevState) => prevState.filter((ch) => ch.id !== +id));


   return (
      <div className='Rick and Morty'>
         {location.pathname !== '/' ? <Nav onSearch={hndleSearch} rNd={hndleRandon} /> : undefined}
         <Routes>
            <Route path={PATHROUTES.LANDINGPAGE} element={<Form login={login} />}></Route>
            <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={hndleOnClosed} />}></Route>
            <Route path={PATHROUTES.ABOUT} element={<About></About>}>  </Route>
            <Route path={PATHROUTES.FAVORITES} element={<Favorites></Favorites>}>  </Route>
            <Route path={'/details/:id'} element={<Details />}></Route>
         </Routes>

         <div />
         <div></div>


      </div>
   );
}

export default App;
