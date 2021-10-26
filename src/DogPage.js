import React, {useEffect, useState } from 'react';
import DogContainer from './DogContainer';
import NewDogForm from './NewDogForm';
import Search from "./Search";

export default function DogPage() {
    const [dogs, setDogs] = useState([])
    const [searchDogs, setSearchDogs] = useState("")

    const DATABASE_API = 'http://localhost:9292/dogs'
    // const BASE_API = "http://localhost:4001/dogs"

    useEffect(() => {
        fetch(DATABASE_API)
        .then(resp => resp.json())
        .then(dogData => setDogs(dogData))
    }, [])

    const addNewDog = (newDogObj) => {
        setDogs((prevArray) => [...prevArray, newDogObj])
    }

    const updateDog = (updatedDog) => {

        const updatedArray = dogs.map((oldDogObj) => {
            if(updatedDog.id === oldDogObj.id) {
                return {...updatedDog}
            } else{
                return oldDogObj
            }
        })

        setDogs(updatedArray)
    }

    const deleteDog = (clickedDog) => {
        const newArray = dogs.filter((oldDogObj) => oldDogObj.id !== clickedDog.id)
        setDogs(newArray)
    }

    const filteredDogs = dogs.filter((dogObj) => dogObj.name.toLowerCase().includes(searchDogs.toLowerCase()))


    return (
        <div className="dog-page">
            <h1>Check out these fine pooches!</h1>
            <NewDogForm addNewDog={addNewDog}/>
            <Search setSearchDogs={setSearchDogs}/>
            <DogContainer deleteDog={deleteDog} updateDog={updateDog} dogs={filteredDogs}/>
        </div>
    )
}
