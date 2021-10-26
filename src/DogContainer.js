import React from 'react'
import DogCard from "./DogCard";

export default function DogContainer({ dogs, updateDog, deleteDog }) {

    return (
        <div className="dog-container">
            <ul className="cards">{ dogs.map(dogObj => <DogCard deleteDog={deleteDog} updateDog={updateDog} key={dogObj.id} dogData={dogObj}/>)}</ul>
        </div>
    )
}
