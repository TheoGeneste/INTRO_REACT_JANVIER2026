import { useEffect, useState } from "react";

const DevineNombre = () => {
    // Etat try, setTry
    const [essaie, setEssaie] = useState(0);
    // Nombre aléatoire = Math.random() * (max - min) + min
    const [nombreAleatoire, setNombreAleatoire] = useState(Math.floor(Math.random() * (100 - 1) + 1));
    const [tentatives,setTentatives] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTentatives(tentatives+1);
        if (essaie == nombreAleatoire) {
            alert("Gagné !!")
            setNombreAleatoire(Math.floor(Math.random() * (100 - 1) + 1));
            setTentatives(0);
        }else if(essaie > nombreAleatoire){
            alert("Trop grand!")
        }else{
            alert("Trop petit!")
        }
    }


    // useEffect(() => {
    //     const nombreAleatoire = Math.floor(Math.random() * (100 - 1) + 1);
    //     console.log(nombreAleatoire);
    // },[])

    return <>
        {/* form avec un input, onSubmit */}
        <form onSubmit={handleSubmit}>
            <input style={{ width: "150px", fontSize: "1.5rem" }} type="number" min={0} max={100} step={1}
                // essaie != 0 && essaie equivalent à 
                // if (essaie != 0){
                    // return essaie
                // }
                value={essaie != 0 && essaie} onChange={(e) => { setEssaie(e.target.value) }} />
            <input style={{ width: "150px", fontSize: "1rem" }} type="submit" value="Tentez-votre chance !" />
        </form>
        <h3>Tentative : {tentatives}</h3>
        {/* la condition suivante pour afficher si plus grand plus petit ou gagné */}
        {/* {condition ? si vrai : condition2 ? si vrai 2 : sinon} */}
    </>;
}

export default DevineNombre;