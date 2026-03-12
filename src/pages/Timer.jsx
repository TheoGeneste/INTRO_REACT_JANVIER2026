import { useEffect, useState } from "react";

const Timer = () => {
    const [second,setSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Si dans les dépendances de mon useEffect j'ai un [] 
    // alors je fait le code à de la fonction une fois que ma page es tchargé et une seul fois
    // useEffect(() => {
    //     console.log("Toto in useEffect");   
    // }, [])

    // Si dans les dépendances de mon useEffect j'ai un [second] 
    // alors je fait le code à de la fonction une fois que l'état second change ainsi il peut être fait à l'infini
    // useEffect(() => {
    //     console.log("seconde");   
    // }, [second])

    // Le console log en dehors du useEffect se fait des que un état change 
    // console.log("toto hors useEffect");

    // avoir un useEffect avec comme dépendance isRunning
    // et dans la fonction du useEfffect une condition pour savoir si isRunning est vrai et si c'est vrai lancer le setInterval
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                // setSecond((ICI JE Récuperer l'ancienne valeur) => et je lui ajoute 1)
                setSecond((prev) => prev + 1)
            }, 1000);
        }
        return () => clearInterval(interval)
    }, [isRunning])

    return <>
        <h2>{new Date(second * 1000).toISOString().substring(14).substring(0,5)}</h2>
        <h2>{String(Math.floor(second / 60)).padStart(2, 0)}:{String(second%60).padStart(2, 0)}</h2>
        <button onClick={() => setIsRunning(true)} disabled={isRunning}>Démarrer</button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Arrêter</button>
        <button onClick={() => {setIsRunning(false); setSecond(0)}}>Rénitialiser</button>
    </>;
}
 
export default Timer;