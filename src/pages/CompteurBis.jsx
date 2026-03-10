import { useState } from "react";

const CompteurBis = () => {
    // État count avec une valeur par défaut à 0
    const [count, setCount] = useState(0);
    // État history avec une valeut par défaut tableau vide []
    const [history, setHistory] = useState([]);
    const [click, setClick] = useState(0);

    return <>
        {/* Bouton + 1 -> Lorsque j'appuis sur ce bouton j'ajoute 1 à count et je push cette valeur dans history */}
        <button onClick={() => {
            setCount(count + 1);
            setHistory([...history, count])
            setClick(click+1)
        }}>+1</button>
        {/* Bouton - 1 -> Lorsque j'appuis sur ce bouton je soustrait 1 à count et je push cette valeur dans 
        history */}
        <button onClick={() => {
            setCount(count - 1);
            setHistory([...history, count])
            setClick(click+1)
        }}>-1</button>
        {/* Bouton reset -> lorque j'appuis sur ce bouton je met count à 0 et je remet mon tableau histoy 
        à un tableau vide */}
        <button onClick={() => {
            setCount(0);
            // setHistory([]);
            // setClick(0)
            setHistory([...history, count]);
            setClick(click+1)
        }}>RESET</button>
        <button onClick={() => {
            if (history.length>0) {
                setCount(history.pop());
            }
        }}>Annuler dernier</button>
        {/* h3 qui affiche count */}
        <h3>{count}</h3>
        {/* Créé un ul */}
        <ul>
            {/* Faire un .map sur history et pour chaque element afficher un li */}
            {history.map((element) => {
                return <li>{element}</li>
            })}
        </ul>
    </>;
}

export default CompteurBis;