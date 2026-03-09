import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
    // Child component should never change the prop it receives from the parent component, it should only use it to display the data or to pass it to other
    // Two rules -> never mutate props and never mutate state directly, always use the setState function to update the state 
    return (
        <div className='search'>
            <div>
                <img src="/search.svg" alt="Search" />
                <input type="text" placeholder='Search through thousands of movies...' 
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                {/* onChange changes the searchTerm state in the parent component as the user types in the search input */}
            </div>
        </div>
    )
}

export default Search