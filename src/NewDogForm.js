import React, { useState } from 'react';

export default function NewDogForm({ addNewDog }) {
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [breed, setBreed] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        const newDog = {
            image: image,
            name: name,
            age: age,
            breed: breed
        }

        const options = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newDog)
    } 

    fetch('http://localhost:9292/dogs', options)
    .then(resp => resp.json())
    .then(newDog => {
        addNewDog(newDog)
        setImage("");
        setName("");
        setAge(0);
        setBreed("");
    })
    }

    return (
        <div className="new-dog-form">
            <h3>Add A New Doggie Here!</h3>
            <form onSubmit={handleSubmit}>
                Image: <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Dog Image"/><br/>
                Name: <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Dog Name"/><br/>
                Age: <input value={age} onChange={(e) => setAge(e.target.value)} type="text" name="age" placeholder="Dog Age"/><br/>
                Breed: <input value={breed} onChange={(e) => setBreed(e.target.value)} type="text" name="breed" placeholder="Dog Breed"/><br/>
                <button type="submit">Add Doggo!</button>
            </form>
        </div>
    );
}
