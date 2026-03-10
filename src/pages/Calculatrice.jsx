import { useState } from 'react';
import '../styles/calculatrice.css'

const Calculatrice = () => {
    const [result, setResult] = useState("");
    // function Calculatrice(){
    return <>
        <h2>Calculatrice</h2>
        {/* Créé mes div et mes button de calculatrice */}
        {/* Copier colle le HTML de la calculatrice, vous pouvez créé un fichier css
        et coller le css puis importer le fichier css en haut de ce fichier */}
        <div id="results">{result == "" ? "0" : result}</div>
        {/* SI result est égale à chaine de caratere vide ALORS(?) j'affiche '0' SINON(:) j'affiche result */}
        <div className="ligne">
            {/* Sur chaque bouton faire un onClick qui ajoute la valeur associé 
            a mon calcul */}
            <div className="buttons" onClick={() => {setResult(result + "7")}}>7</div>
            <div className="buttons" onClick={() => {setResult(result + "8")}}>8</div>
            <div className="buttons" onClick={() => {setResult(result + "9")}}>9</div>
            <div className="buttons operators" onClick={() => {setResult(result + "-")}}>-</div>
        </div>
        <div className="ligne">
            <div className="buttons" onClick={() => {setResult(result + "4")}}>4</div>
            <div className="buttons" onClick={() => {setResult(result + "5")}}>5</div>
            <div className="buttons" onClick={() => {setResult(result + "6")}}>6</div>
            <div className="buttons operators" onClick={() => {setResult(result + "+")}}>+</div>
        </div>
        <div className="ligne">
            <div className="buttons" onClick={() => {setResult(result + "1")}}>1</div>
            <div className="buttons" onClick={() => {setResult(result + "2")}}>2</div>
            <div className="buttons" onClick={() => {setResult(result + "3")}}>3</div>
            <div className="buttons operators" onClick={() => {setResult(result + "*")}}>*</div>
        </div>
        <div className="ligne">
            <div className="buttons" onClick={() => {setResult(result + "0")}}>0</div>
            <div className="buttons" onClick={() => {setResult(result + ".")}}>.</div>
            <div className="buttons red" id="reset" onClick={() => {setResult('')}}>C</div>
            <div className="buttons operators" onClick={() => {setResult(result + "/")}}>/</div>
        </div>
        <div className="ligne">
            <div className="buttons red" id="delete" onClick={() => {setResult(result.slice(0,-1))}}>DELETE</div>
            <div className="buttons operators" id="equal" onClick={() => {setResult(eval(result))}}>=</div>
        </div>
    </>
}

export default Calculatrice;