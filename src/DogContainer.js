import React, { useState } from 'react';
import DogCard from "./DogCard";

export default function DogContainer({ dogs, updateDog, deleteDog }) {
    // const { name } = agencyName;
    // const { name, age, breed, id} = dogs;

    const [sortBy, setSortBy] = useState("id")

    const sortedDogs = dogs.sort((DogA, DogB) => {
         if (sortBy === "id") {
             return DogA.id - DogB.id
         }else if (sortBy === "name"){
             return DogA.name.localeCompare(DogB.name)
         }else if (sortBy === "age"){
            return DogA.age.localeCompare(DogB.age)
        }else if (DogA.breed === "breed"){
            return DogA.breed.localeCompare(DogB.breed)
        }else {
            return DogA.id - DogB.id
        }
     })

    // sortedDogs = dog in map
    // const ageName={name}
    // console.log(dogs)
    const dogCards = sortedDogs.map(dogObj => <DogCard deleteDog={deleteDog} updateDog={updateDog} key={dogObj.id} dogData={dogObj} ageName={dogObj.agency?.name}/>)


    return (
        <div className="dog-container">
            <button oncClick={() => setSortBy("id")}>Sort By Default</button>
            <button onClick={() => setSortBy("name")}>Sort By Name</button>
            <button onClick={() => setSortBy("age")}>Sort By Age</button>
            <button onClick={() => setSortBy("breed")}>Sort By Breed</button>
            <ul className="cards">{dogCards}</ul>
        </div>
    )
}
