import { useState } from "react";

const Couleurs = () => {
    // function Couleurs(){
    const [color, setColor] = useState("#3FA2D6");
    // Nouvel état histoColors avec comme valeur par défaut un tableau vide
    const [histoColors, setHistoColors] = useState([]);

    function RGBToHex(rgb) {
        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        // Turn "rgb(r,g,b)" into [r,g,b]
        rgb = rgb.substr(4).split(")")[0].split(sep);

        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);

        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;

        return "#" + r + g + b;
    }

    return <>
        <h1>Générateur de couleurs</h1>
        {/* Historique .map pur afficher toute les couleurs */}
        <ul style={{ listStyle: "none", padding: 0 }}>
            {histoColors.map((element) => {
                return <li onClick={(e) => {
                    // console.log(e.target.innerText);
                    navigator.clipboard.writeText(RGBToHex(e.target.style.backgroundColor));
                    alert("Valeur copié")
                }} style={{ backgroundColor: element, padding: "5px" }}>{element}</li>
            })}
        </ul>
        {/* Quand on génère une nouvelle couleur on l'ajoute au tableau histo et on la met dans la variable color */}
        <button onClick={() => {
            setColor("#" + (Math.floor(Math.random() * 0xffffff) | 0x0f0f0f).toString(16))
            // [...histoColors] => copier toutes les valeurs de histoColors dans mon nouveau tableau
            setHistoColors([...histoColors, color])
        }}>Générer</button>
        <div style={{
            width: "500px", height: "500px", backgroundColor: color, display: "flex",
            justifyContent: "center", alignItems: "center", fontSize: "2rem"
        }} onClick={(e) => {
            // console.log(e.target.innerText);
            navigator.clipboard.writeText(RGBToHex(e.target.style.backgroundColor));
            alert("Valeur copié")
        }}>
            {/* Carre de la couleur générer */}
            {/*  Afficher le code Hexa*/}
            {color}
        </div>
    </>;
}

export default Couleurs;