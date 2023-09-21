import { useState } from 'react';

import SearchMovies from './components/SearchMovies';
import MovieResults from './components/MovieResults';
import MovieDetails from './components/MovieDetails';

import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);
  
  
  const handleSearchMovie = async (value) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzVkNWMxOWU1NTdkNTg0OTkwZGQ1MGMzMDk1ZDE5MCIsInN1YiI6IjY1MGFlMzIxY2FkYjZiMDBjNGY3NjdhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruDgp-she0dK9LWr5o_TGnUAo3H6YW5HgwDt1k5A2nA'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false`, options)
      .then(response => response.json())
      .then(json => {
        const data = json.results.filter((movie) => {
          return (
              value && 
              movie && 
              movie.title && 
              movie.title.toLowerCase().includes(value)
          )
        })
        setSearchResults(data);
        console.log(searchResults);
      })
      .catch(err => console.error(err));
    
      setMovieSelected(null);
      
  }

  return (
    <div className="App">
      <h1 className='heading'>Movie App</h1>
      
      <div className="search-bar-container">
        <SearchMovies 
          query = { query }
          setQuery = { setQuery }
          handleSearchMovie = { handleSearchMovie }
          setMovieSelected = {setMovieSelected}
        />
        
        {movieSelected ? (
          <MovieDetails movie = { movieSelected } />
        ) : (
          <MovieResults 
            searchResults = { searchResults }
            setMovieSelected = { setMovieSelected }
            query = {query}
          />
        )}
      </div>
    </div>
  );
}

export default App;
