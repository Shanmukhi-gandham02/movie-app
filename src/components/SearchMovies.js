import React from 'react'

import {FaSearch} from 'react-icons/fa';


const SearchMovies = ({ query, setQuery, handleSearchMovie}) => {
  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        
        <input 
            type="text"
            placeholder='Search movies'
            value={query}
            onChange={(e) => {
              
              setQuery(e.target.value);
              handleSearchMovie(e.target.value);
            }
              }
            className='input'
        />

    </div>
  )
}

export default SearchMovies