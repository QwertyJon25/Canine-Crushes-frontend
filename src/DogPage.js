import React, {useEffect, useState } from 'react';
import DogContainer from './DogContainer';
import NewDogForm from './NewDogForm';
import Search from "./Search";

export default function DogPage() {
    const [dogs, setDogs] = useState([])
    const [searchDogs, setSearchDogs] = useState("")
    // const [agencyName, setAgencyName] = useState("")


    useEffect(() => {
        fetch('http://localhost:9292/dogs/agencies')
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

    // useEffect(() => {
    //     fetch('http://localhost:9292/agencies/dogs')
    //     .then(resp => resp.json())
    //     .then(ageNameData => setAgencyName(ageNameData))
    // }, [])

    // const filteredDogs = dogs?.filter((dogObj) => dogObj.name.toLowerCase().includes(searchDogs.toLowerCase()))
     const filteredDogs = dogs?.filter((dogObj) => dogObj.name?.toLowerCase().includes(searchDogs?.toLowerCase()))
    
    

    return (
        <div className="dog-page">
            <h1>Check out these fine pooches!</h1>
            <Search setSearchDogs={setSearchDogs}/>
            <DogContainer deleteDog={deleteDog} updateDog={updateDog} dogs={filteredDogs} />
            <NewDogForm addNewDog={addNewDog}/>
        </div>
    )
}
