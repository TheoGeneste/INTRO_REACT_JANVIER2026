import { useState } from "react";

const Compteur = () => {
    const [result,setResult] = useState(0);

    return <>
        <h3 style={{color : result > 10 ? "red" : "white"}}>{result}</h3>
        <button onClick={() => {setResult(result+1)}}>+1</button>
        <button onClick={() => {
            if (result - 1 < 0 ) {
                return;
            }
            setResult(result-1);
            }}>-1</button>
        <button onClick={() => {setResult(result+10)}}>+10</button>
        <button onClick={() => {
            if (result - 10 < 0) {
                return;
            }
            setResult(result-10)
            }}>-10</button>
        <button onClick={() => {setResult(0)}}>RESET</button>
    </>;
}
 
export default Compteur;