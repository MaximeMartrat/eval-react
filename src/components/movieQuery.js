import React, { useState, useEffect } from 'react';
import CollectionCard from './CollectionCard';
import MovieCard from './MovieCard';

export default function MovieQuery({ data, sortBy, selection, apikey }) {

  const [moviesData, setMoviesData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchUrl, setSearchUrl] = useState(null);
  const UrlByTitle = `https://www.omdbapi.com/?apikey=${apikey}&t=${data}`;
  const UrlByCollection = `https://www.omdbapi.com/?apikey=${apikey}&s=${data}`;
  
  useEffect(() => {
      const sortMovies = (movies) => {
          // Triez les films en fonction de la valeur de 'sortBy'
      switch (sortBy) {
        case 'year':
          return movies.sort((a, b) => a.Year - b.Year);
          case 'notes':
            return movies.sort((a, b) => a.imdbRating - b.imdbRating);
          case 'duration':
            return movies.sort((a, b) => {
              const durationA = parseInt(a.Runtime);
              const durationB = parseInt(b.Runtime);
              return durationA - durationB;
            });
        default:
          return movies;
      }
    };

    const fetchMovieDetails = async (movies) => {
      // Effectuer une requête fetch pour chaque film de la collection
      const movieDetailsPromises = movies.map((movie) =>
        fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${movie.imdbID}`)
          .then((response) => response.json())
      );
      const movieDetails = await Promise.all(movieDetailsPromises);
      setMoviesData(sortMovies(movieDetails));
    };

    if (selection === 'collection') {
      setSearchUrl(UrlByCollection);
    }
    if (selection === 'film') {
      setSearchUrl(UrlByTitle);
    }

    // Traitement des données (requête fetch)
    if (searchUrl) {
      fetch(searchUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("L'API ne répond pas !");
          }
          return response.json();
        })
        .then((actualData) => {
          if (actualData.Search) {
            // Si les résultats sont une collection de films
            fetchMovieDetails(actualData.Search);
          } else {
            // Si le résultat est un seul film
            setMoviesData([actualData]);
          }
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          console.log(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }

  }, [data, sortBy, apikey, selection, UrlByCollection, UrlByTitle, searchUrl]);

  return (
    <>
      {loading && <div> données en chargement... </div>}
      {error && <div>erreur : {error}</div>}
      {data && (
        <>
          {searchUrl === UrlByCollection && selection ==='collection' ? (
            <CollectionCard data={moviesData} />
          ) : (
              <MovieCard data={moviesData} />
          )}
        </>
      )}
    </>
  )
}
