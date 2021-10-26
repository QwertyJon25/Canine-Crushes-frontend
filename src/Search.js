import React from 'react';

export default function Search({ setSearchDogs }) {
    return (
        <div className="search-bar">
            <label htmlFor="searchbar">Search Dogs:</label>
            <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            onChange={(e) => setSearchDogs(e.target.value)} 
            />
        </div>
    );
}
