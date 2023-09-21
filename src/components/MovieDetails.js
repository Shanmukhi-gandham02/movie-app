import React from 'react'

const MovieDetails = ({movie}) => {
  return (
    <div className="template">
      <h2>{movie.title}</h2>
      <img className='movie-image' src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
      <p>Overview: <span> {movie.overview} </span> </p>
      <p>Release Date: <span> {movie.release_date} </span></p>
      <p>Average Rating: <span> {movie.vote_average} </span></p>
    </div>
  )
}

export default MovieDetails