import React, { useState, useEffect } from 'react'
import AgencyCard from "./AgencyCard"

export default function AgencyContainer() {
    const [agencies, setAgencies] = useState([])
    const [showForm, setShowForm] = useState(false)

useEffect(() => {
        fetch('http://localhost:9292/dogs/agencies')
        .then(resp => resp.json())
        .then(agencyData => setAgencies(agencyData))
    }, [])
// console.log(agencies)
    const agencyCards = agencies.map(ageObj => <AgencyCard key={ageObj.id} ageData={ageObj}/>)

    return (
        <div>
            <h1>Hey, check out our Agency's directory!</h1>
                { showForm ? <ul className="age-cards">{agencyCards}</ul> : <img className="agency-img" src="https://www.thesprucepets.com/thmb/AYrOH3UNNGqwwkcMOjE8BJdA9YA=/1854x1854/smart/filters:no_upscale()/pitbull-dog-breeds-4843994-hero-db6922b6c8294b45b19c07aff5865790.jpg" alt="agency-img"/>}<br/>
                <button onClick={() => setShowForm(!showForm)} className="pooch-button" style={{backgroundColor: "#8BF5C7"}}>What pooches do we have?</button>
        </div>
    )
}

//null
