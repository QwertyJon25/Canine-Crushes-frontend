import React from 'react'

export default function AgencyCard({ ageData }) {
const { name, age, breed, image_url } = ageData;



    return (
        <div className="agency-card">
            <hr/>
            <img src={image_url} alt={name} className="agency-card-img"/>
            <h4>Name: {name}</h4>
            <h4>{age} years olds</h4>
            <h4>Breed:{breed}</h4>
        </div>
    )
}
