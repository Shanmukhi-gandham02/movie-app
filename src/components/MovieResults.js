import React from 'react'

const MovieResults = ({searchResults, setMovieSelected, query}) => {
  return (
    
    <div className="movie-results">
      {query ? (
        <>
        <h2>Search Results</h2>
        <div className='list'>
          { searchResults.length >0 ? ( searchResults.map((movie) => (
            <div className='card card-title hoverarea' key={movie.id}>
              <img className='movie-image' src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
              <button className='button-details' onClick={() => setMovieSelected(movie)}>View More</button>
            </div>
          ))) : ( <div className='no-results'> Oops! We are unable to find any results for the searched term.</div> )}
        </div>
        </>
      ) : ( <h2>Type to search your favourite movies.</h2> )}
    </div> 
  )
}

export default MovieResults