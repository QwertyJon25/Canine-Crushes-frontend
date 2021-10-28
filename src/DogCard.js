import React, { useState } from 'react';

export default function DogCard({ dogData, updateDog, deleteDog, ageName }) {
    const { name, age, breed, image_url, id} = dogData;
    // const { name } = ageName;

    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState("")
    const [newBreed, setNewBreed] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [liked, setLiked] = useState(true)


    const handleUpdate = (e) => {
        e.preventDefault();

        fetch('http://localhost:9292/dogs/'+id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application.json'},
            body: JSON.stringify({name: newName, age: newAge, breed: newBreed})
        })
        .then(resp => resp.json())
        .then(updatedDog => updateDog(updatedDog))
}

const deleteHandler = () => {
    fetch('http://localhost:9292/dogs/'+id, {method: "DELETE"})
    .then(() => deleteDog(dogData))

}

// const [count, setCount] = useState(0);

// useEffect(() => {
//     setCount(JSON.parse(window.localStorage.getItem('count')));
//   }, []);

//   useEffect(() => {
//     window.localStorage.setItem('count', count);
//   }, [count]);

//   const increaseCount = () => {
//     return setCount(count + 1);
//   }
//   const decreaseCount = () => {
//     return setCount(count - 1)
//   }



    return (
        <li className="dog-card">
            <img src={image_url} alt={name} className="dog-card-img"/>
            <h2>{name}</h2>
            <h3>{age} years olds</h3>
            <h4>{breed}</h4>
            <h4>Agency: {ageName}</h4>
             {!liked ? (<button onClick={() => setLiked((prev) => !prev)}>❤️</button>) :
      (<button onClick={() => setLiked((prev) => !prev)}>🤍</button>)}
      {/* <button onClick={increaseCount}>👍🏽</button><button onclick={decreaseCount}>😢</button>: {count} */}
            <button onClick={() => setShowForm(!showForm)} style={{backgroundColor: "#8BF5C7"}}>Edit Details</button>
            <button onClick={deleteHandler} style={{backgroundColor: "#FA6A74"}}>BYE PUPPY</button>
            { showForm ? <form onSubmit={handleUpdate}>
                New Name: <input onChange={(e) => setNewName(e.target.value)} value={newName} placeholder="input new name" name="name" type="text" />
                New Age: <input onChange={(e) => setNewAge(e.target.value)} value={newAge} placeholder="input new age" name="age" type="text" />
                New Breed: <input onChange={(e) => setNewBreed(e.target.value)} value={newBreed} placeholder="input new breed" name="breed" type="text" />
                <input type="submit" />
            </form>: null}
        </li>
    );
}