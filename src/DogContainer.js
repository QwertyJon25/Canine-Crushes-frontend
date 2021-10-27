import React from 'react';
import DogCard from "./DogCard";

export default function DogContainer({ dogs, updateDog, deleteDog }) {
    // const { name } = agencyName;
    // const { name, age, breed, id} = dogs;

    // const [sortBy, setSortBy] = useState("id")

    // DoggA = "id", DogB = "Name", DogC = "Age", DogD = "Breed"
    // const sortedDogs = dogs.sort((DogA, DogB, DogC, DogD) => {
    //     if (sortBy === "id") {
    //         return DogA.id = DogB.id
    //     } else {
    //         return DogA.location.localeCompare(DogB.location)
    //     }
    // })

    // sortedListings = dog in map
    // const ageName={name}
    // console.log(dogs)
    const dogCards = dogs.map(dogObj => <DogCard deleteDog={deleteDog} updateDog={updateDog} key={dogObj.id} dogData={dogObj} ageName={dogObj.agency?.name}/>)


    return (
        <div className="dog-container">
            {/* <button oncClick={() => setSortBy("id")}>Sort By Default</button>
            <button onClick={() => setSortBy("name")}>Sort By Name</button>
            <button onClick={() => setSortBy("age")}>Sort By Age</button>
            <button onClick={() => setSortBy("breed")}>Sort By Breed</button> */}
            <ul className="cards">{dogCards}</ul>
        </div>
    )
}
