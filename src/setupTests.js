// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import {render, fireEvent} from '@testing-library/react';
import React from 'react';

import SearchMovies from './components/SearchMovies';
import MovieResults from './components/MovieResults';
import MovieDetails from './components/MovieDetails';

describe('SearchMovies component', () => {
    test('it renders correctly and handles search', () => {
        const setQuery = jest.fn();
        const handleSearchMovie = jest.fn();
      
        const { getByPlaceholderText, getByText } = render(
          <SearchMovies
            query=""
            setQuery={setQuery}
            handleSearchMovie={handleSearchMovie}
          />
        );
        const inputElement = getByPlaceholderText('Search movies');
        fireEvent.change(inputElement, { target: { value: 'Avatar' } });

        expect(setQuery).toHaveBeenCalledWith('Avatar');
        expect(handleSearchMovie).toHaveBeenCalled();
    });
  });


describe('MovieResults component', () => {
    test('it renders search results and handles movie selection', () => {
        const setMovieSelected = jest.fn();

        const searchResults = [
          { id: 1, title: 'Movie 1', poster_path: '/poster1.jpg' },
          { id: 2, title: 'Movie 2', poster_path: '/poster2.jpg' },
        ];
      
        const { getByText } = render(
          <MovieResults searchResults={searchResults} setMovieSelected={setMovieSelected} />
        );
      
        expect(getByText('Movie 1')).toBeInTheDocument();
        expect(getByText('Movie 2')).toBeInTheDocument();
      
        fireEvent.click(getByText('Details', { exact: false }));
      
        expect(setMovieSelected).toHaveBeenCalledWith(searchResults[0]);
      
    });
  });
  

describe('MovieDetails component', () => {
    test('it renders movie details correctly', () => {
        const movie = {
            id: 1,
            title: 'Movie 1',
            overview: 'This is the movie overview.',
            release_date: '2022-01-01',
            vote_average: 8.5,
          };
        
          const { getByText } = render(<MovieDetails movie={movie} />);
        
          expect(getByText('Movie 1')).toBeInTheDocument();
          expect(getByText('This is the movie overview.')).toBeInTheDocument();
          expect(getByText('Release Date: 2022-01-01')).toBeInTheDocument();
          expect(getByText('Average Rating: 8.5')).toBeInTheDocument();
    });
  });