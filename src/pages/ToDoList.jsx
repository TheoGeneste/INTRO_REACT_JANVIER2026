import { useState } from "react";

const ToDoList = () => {
    // Un état tasks avec comme valeut par défaut un [] -> cet état va stocker toutes les taches
    const [tasks, setTasks] = useState([]);
    // Un état task avec comme valeur par defaut un {} -> cet état va stocker la tache que l'on est entrain d'ajouter
    const [task, setTask] = useState({});
    const [state, setState] = useState("Toutes");


    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        // vous allez construire un object pour que on puisse l'ajouter au tableau tasks
        // [...tasks, {id: tasks.length + 1 , title: task.title, done :false} ]
        setTasks([...tasks, { id: tasks.length + 1, title: task.title, done: false }])
    }

    // handleChange avec en parametre une task(element du .map)
    const handleChange = (element) => {

        // On va aller chercher l'element correspondant dans le tableau tasks .find
        let elementToChange = tasks.findIndex((e) => {
            return e.id == element.id;
        })

        // newTasks va contenir toutes mes taches les anciennes et celle modifié.
        let newTasks = [...tasks];
        // Une fois trouvé on va mettre à jour la valeur de done de cette object
        // newTasks[elementToChange] c'est l'object {id: , title: , done: } que je vais modifier
        newTasks[elementToChange] = {
            // copie colle tout l'object
            ...newTasks[elementToChange],
            // Je change la valeur que de done en mettant l'inverse de la valeur actuelle
            done: !newTasks[elementToChange].done
        }

        // on va mettre à jour tasks avec setTasks et ce nouvelle object 
        setTasks(newTasks);
    }

    const handleDelete = (element) => {
        // Trouve la position de mon element dans le tableau
        let elementIndex = tasks.findIndex((e) => {
            return e.id == element.id;
        })

        // copie le tableau
        let newTasks = [...tasks];

        // Supprimer l'element
        newTasks.splice(elementIndex, 1);

        setTasks(newTasks)
    }



    return <>
        {/* formulaire avec un onSubmit qui appelle la function handleSubmit*/}
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Nouvelle tâche:</label>
            {/* input pour le title qui aura comme valeur task.title */}
            <input type="text" id="task" value={task.title} onChange={(e) => { setTask({ title: e.target.value }) }} />
            {/* input/button type submit */}
            <input type="submit" />
        </form>

        <label htmlFor="state">Filtre par état</label>
        <select name="state" id="state" value={state} onChange={(e) => { setState(e.target.value); }}>
            <option value="Toutes">Toutes</option>
            <option value="Actives">Actives</option>
            <option value="Terminées">Terminées</option>
        </select>


        {/* tasks.map pour parcourir les taches */}
        
        {tasks.map((element) => {
            // element = {id: , title: , done :}
            {/* afficher le title et la checkbox si dessous */ }
            {/* input(checkbox) pour la valeur de `done` -> cette input aura on onChange pour modifier
             l'object task afficher */}
            if (state == "Actives" && element.done == false) {
                return <li key={element.id} style={{ textDecoration: element.done ? 'line-through' : "" }}>{element.title}
                    {/* <input type="checkbox" value={element.done} onChange={(e) => {element.done = e.target.value}} /> */}
                    <input type="checkbox" checked={element.done} onChange={() => { handleChange(element) }} />
                    <button onClick={() => { handleDelete(element) }}>Delete</button>
                </li>
            } else if (state == "Terminées" && element.done == true) {
                return <li key={element.id} style={{ textDecoration: element.done ? 'line-through' : "" }}>{element.title}
                    {/* <input type="checkbox" value={element.done} onChange={(e) => {element.done = e.target.value}} /> */}
                    <input type="checkbox" checked={element.done} onChange={() => { handleChange(element) }} />
                    <button onClick={() => { handleDelete(element) }}>Delete</button>
                </li>
            } else if (state == "Toutes") {
                return <li key={element.id} style={{ textDecoration: element.done ? 'line-through' : "" }}>{element.title}
                    {/* <input type="checkbox" value={element.done} onChange={(e) => {element.done = e.target.value}} /> */}
                    <input type="checkbox" checked={element.done} onChange={() => { handleChange(element) }} />
                    <button onClick={() => { handleDelete(element) }}>Delete</button>
                </li>
            }

        })}
    </>;
}

export default ToDoList;