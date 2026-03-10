import { useState } from "react";

const Convertisseur = () => {
    // un état pour stocker la valeur en celsius
    const [celsius, setCelsius] = useState(0);
    // un état pour stocker la valeur en Fahrenheit
    const [fahrenheit, setFahrenheit] = useState(32);

    return <>
        {/* Input ou tu rentre la valeur en celsius */}
        {/* Des que l'input  celsius change tu met la valeur das l'etat celsius et
        tu la convertie pour l'état Fahrenheit */}
        <label htmlFor="celsius">°C</label>
        <input id="celsius" type="number"  value={celsius} onChange={(e) => {
            setCelsius(e.target.value);
            setFahrenheit(e.target.value * (9/5) + 32 )
        }}/>
        {/* Input ou tu rentre la valeur en  Fahrenheit*/}
        {/* Des que l'input  Fahrenheit change tu met la valeur das l'etat Fahrenheit et
        tu la convertie pour l'état celsius */}
        <label htmlFor="fahrenheit">°F</label>
        <input id="fahrenheit" type="number" value={fahrenheit} onChange={(e) => {
            setFahrenheit(e.target.value);
            setCelsius((e.target.value - 32) * (5/9))
        }} />
    </>;
}
 
export default Convertisseur;