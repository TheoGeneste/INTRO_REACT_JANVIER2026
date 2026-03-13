import { useState } from "react";

const Formulaire = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [mailError, setMailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [successSubmit, setSuccessSubmit] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == "") {
            setNameError("Le champ Name doit être renseigner");
        }else{
            setNameError('');
        } 
        
        if (!mail.includes("@")) {
            setMailError("L'email doit contenir un @");
        }else{
            setMailError('')
        }

        if (message.length < 10) {
            setMessageError("Le message doit faire plus de 10 caractères !")
        }else{
            setMessageError('')
        }
        
        if (name != "" && mail.includes("@") && message.length >= 10) {
            setSuccessSubmit('Votre message à bien été envoyé')
            setMail('');
            setMessage('')
            setName('')
        }else{
            setSuccessSubmit('')
        }
        
    }

    return <>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }} >
            <label htmlFor="name">Name</label>
            <input placeholder="Dupont..." type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <span style={{ backgroundColor: "red", color: "white", width: '100%', textAlign: "center" }}>
                {nameError}
            </span>
            <label htmlFor="mail">Mail</label>
            <input placeholder="dupont@gmail.com..." type="text" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
            <span style={{ backgroundColor: "red", color: "white", width: '100%', textAlign: "center" }}>
                {mailError}
            </span>
            <label htmlFor="message">Message</label>
            <textarea placeholder="Votre message..." style={{ resize: "none" /*Empeche le changement de taille du textarea par le user */ }}
                id="message" value={message} onChange={(e) => setMessage(e.target.value)}
                cols={50} rows={5}></textarea>
            <span style={{ backgroundColor: "red", color: "white", width: '100%', textAlign: "center" }}>
                {messageError}
            </span>
            {/* <button type="submit">Envoyer</button> */}
            <input type="submit" value="Envoyer" />
            <span style={{ backgroundColor: "green", color: "white", width: '100%', textAlign: "center" }}>
                {successSubmit}
            </span>
        </form>
    </>;
}

export default Formulaire;