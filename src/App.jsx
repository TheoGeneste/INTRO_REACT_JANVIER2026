import { useState } from 'react'
import './App.css'
import Calculatrice from './pages/Calculatrice';
import Couleurs from './pages/Couleurs';
import DevineNombre from './pages/DevineNombre';
import Compteur from './pages/Compteur';
import Citations from './pages/Citations';
import Convertisseur from './pages/Convertisseur';
import CompteurBis from './pages/CompteurBis';
import ToDoList from './pages/ToDoList';
import UserCard from './pages/UserCard';
import Buttons from './pages/Buttons';
import Gallery from './pages/Gallery';
import Timer from './pages/Timer';

function App() {
  // variable,setVariable
  const [compteur, setCompteur] = useState(0);
  // compteur = 0
  // function setCompteur(newValue){
  //  compteur = newValue;
  // }

  return (
    <>
      {/* <h1>Hello tout le monde !!</h1> */}
      {/* if(compteur > 0){
        {compteur};
      }else{
        "Compteur is NULL";
      } */}
      {/* <p>{compteur > 0 ? compteur : "Compteur is NULL" } </p> */}
      {/* () => {} est une function fléché */}
      {/* équivalent function(){} */}
      {/* <button onClick={() => {setCompteur(compteur + 1)}} >Incrémenter</button> */}
      {/* <button onClick={function(){setCompteur(compteur + 1)}} >Incrémenter</button> */}
      {/* BOUTON DÉCRÉMENTATION */}
      {/* <button onClick={() => {setCompteur(compteur - 1)}}>Décrementer</button> */}
      {/* <Calculatrice /> */}
      {/* <Couleurs /> */}
      {/* <DevineNombre /> */}
      {/* <Compteur /> */}
      {/* <Citations /> */}
      {/* <Convertisseur /> */}
      {/* <CompteurBis/> */}
      {/* <ToDoList /> */}
      {/* <UserCard /> */}
      {/* <Buttons /> */}
      {/* <Gallery /> */}
      <Timer />
    </>
  )
}

export default App
