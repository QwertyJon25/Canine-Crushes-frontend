import React, { useState } from 'react';
import DogCard from "./DogCard";

export default function DogContainer({ dogs, updateDog, deleteDog }) {
    const { name, age, breed, id} = dogs;

    const [sortBy, setSortBy] = useState("id")

    // listingA = "id", listingB = "Name", listingC = "Age", listingD = "Breed"
    const sortedListings = dogs.sort((listingA, listingB, listingC, listingD) => {
        if (sortBy === "id") {
            return listingA.id = listingB.id
        } else {
            return listingA.location.localeCompare(listingB.location)
        }
    })

    const dogCards = sortedListings.map(dogObj => <DogCard deleteDog={deleteDog} updateDog={updateDog} key={dogObj.id} dogData={dogObj}/>)


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
