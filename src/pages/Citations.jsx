import { useState } from "react";

const Citations = () => {
    // État citations qui est un tableau d'object JSON avec des citations
    // Chaque object JSON contient citation et auteur 
    // [{citation : "votre citation", auteur: "toto"}, {citation : "votre citation", auteur: "toto"}...]
    // Pour générer ce tableau vous pouvez utiliser l'IA
    // const [citations, setCitations] = useState([
    const citations = [
        { citation: "Le succès est la somme de petits efforts répétés jour après jour.", auteur: "Robert Collier" },
        { citation: "La simplicité est la sophistication suprême.", auteur: "Leonardo da Vinci" },
        { citation: "Ils ne savaient pas que c'était impossible, alors ils l'ont fait.", auteur: "Mark Twain" },
        { citation: "Le meilleur moyen de prédire l'avenir est de le créer.", auteur: "Peter Drucker" },
        { citation: "N'abandonnez jamais un rêve juste à cause du temps qu'il faudra pour l'accomplir.", auteur: "Earl Nightingale" },
        { citation: "La créativité, c'est l'intelligence qui s'amuse.", auteur: "Albert Einstein" },
        { citation: "Le seul vrai échec est de ne pas essayer.", auteur: "George Clooney" },
        { citation: "Faites de votre vie un rêve, et d'un rêve une réalité.", auteur: "Antoine de Saint-Exupéry" }
    ];

    // Un deuxième etat qui stock la citation qui a été selectionné aléatoirement
    const [citation, setCitation] = useState({});

    return <>
        {/* Faire un bouton générer citation et lorsque l'on clique sur ce bouton
        on va chercher une citation aléatoirement dans le tableau citations et on la stock
        dans notre deuxième état*/}
        <button onClick={() => {
            const randomCit = (citations[Math.floor(Math.random() * citations.length)]);
            setCitation(randomCit);
        }}>Généré une citation</button>
        {/* Faire une balise h3 qui affiche la citation selectionné si il y en une */}
        {/* Sur ce h3 avoir la possibilité de cliquer dessus pour copier la citation */}
        {/* {citation.citation} */}
        <h3 onClick={(e) => {
            navigator.clipboard.writeText(citation.citation + " - " + citation.auteur);
            // navigator.clipboard.writeText(e.target.innerText)
        }}>"{citation.citation}" - {citation.auteur}</h3>

        {/* Bouton like qui affiche une alerte vous avez aimez cette citation */}
        {citation.citation &&
            <button onClick={() => { alert("Vous avez aimé cette citation") }}>Like</button>
        }
    </>;
}

export default Citations;