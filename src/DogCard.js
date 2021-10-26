import React, { useState} from 'react';

export default function DogCard({ dogData, updateDog, deleteDog }) {
    const { name, age, breed, image_url, id} = dogData;

    const [newName, setNewName] = ("")
    const [showForm, setShowForm] = useState(false)


    const handleUpdate = (e) => {
        e.preventDefault();

        fetch('http://localhost:9292/dogs/'+id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application.json'},
            body: JSON.stringify({name: newName})
        })
        .then(resp => resp.json())
        .then(updatedDog => updateDog(updatedDog))
}

const deleteHandler = () => {
    fetch('http:localhost:9292/dogs/'+id, {method: "DELETE"})
    .then(() => deleteDog(dogData))

}
    return (
        <li className="dog-card">
            <img src={image_url} alt={name}/>
            <h4>{name}</h4>
            <h3>{age}</h3>
            <h2>{breed}</h2>
            <button>❤</button>
            <button onClick={() => setShowForm(!showForm)}>Edit Name</button>
            <button onClick={deleteHandler} style={{backgroundColor: "red"}}>BYE PUPPY</button>
            { showForm ? <form onSubmit={handleUpdate}>
                <input onChange={(e) => setNewName(e.target.value)} value={newName} placeholder="input new name" name="name" type="text" />
                <input type="submit" />
            </form>: null}
        </li>
    );
}
