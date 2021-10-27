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

    const agencyCards = agencies.map(ageObj => <AgencyCard key={ageObj.id} ageData={ageObj}/>)

    return (
        <div>
            <h1>Hey, check out our agencie's directory!</h1>
                <button onClick={() => setShowForm(!showForm)}>What pooches do we have?</button>
                { showForm ? <ul className="age-cards">{agencyCards}</ul> : null}
        </div>
    )
}
