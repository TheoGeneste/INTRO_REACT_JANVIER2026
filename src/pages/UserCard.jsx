import { useState } from "react";

const UserCard = () => {
    // État user qui sera un object avec des valeur par défaut par exemple 
    const [user,setUser] = useState({name: "Alice", email: "alice@exemple.com", age:25});
    // {name: "Alice", email: "alice@exemple.com", age:25}
    // État isModified avec comme valeur par défaut false
    const [isModified,setIsModified] = useState(false)
    // État userModified 
    const [userModified,setUserModified] = useState({});

    // handleChange
    const handleChange = (e) => {
        // Copier l'object userModified dans une nouvelle variable
        let newUser = {...userModified};
        // modifier la clé que vous avez changé 
        if (e.target.name == "name") {
            newUser.name = e.target.value;
        }else if(e.target.name== "email"){
            newUser.email = e.target.value;
        }else if(e.target.name == "age"){
            newUser.age = e.target.value;
        }
        // enregistrer le nouvel object avec setUserModified
        setUserModified(newUser);
        
    }

    const handleSubmit = () => {
        // Sauvegarder les valeurs de userModified dans user
        setUser(userModified);
        // je veux passer is Modified à false
        setIsModified(false);
    }


    return <>
        {/* Si isModified est false alors*/}
            {isModified == false ? <>
                {/* Afficher les infos du user */}
                <div>{user.name}, {user.email}, {user.age}</div>
                {/* Bouton modifier -> setUserModified(user)  */}
                <button onClick={() => {
                    setIsModified(true);
                    setUserModified(user);
                }}>Modifier</button>
            {/* Sinon j'affiche les inputs prérempli des valeur de mon user */}
            </> : <>
                {/* form -> utiliser userModified*/}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={userModified.name} onChange={(e) => {setUserModified({...userModified, name : e.target.value})}} />
                    <input type="text" name="email" value={userModified.email} onChange={handleChange} />
                    <input type="text" name="age" value={userModified.age} onChange={handleChange} />
                    {/* Bouton Sauvegarder -> va mettre le userModifed dans l'état user */}
                    <input type="submit" value="Sauvegarder" />
                </form>
                {/* Bouton annuler */}
                <button onClick={() => {
                    setIsModified(false);
                }}>Annuler</button>
                
            </>}
    </>;
}
 
export default UserCard;