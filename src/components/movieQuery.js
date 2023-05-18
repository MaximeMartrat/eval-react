import React, { useState, useEffect } from 'react';
import CollectionCard from './CollectionCard';
import MovieCard from './MovieCard';

export default function MovieQuery({data, sortBy, selection, apikey}) {
    
    const[moviesData,setMoviesData] = useState(null);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(true);
    const[searchUrl, setSearchUrl] = useState(null);
    const UrlByTitle = `https://www.omdbapi.com/?apikey=${apikey}&t=${data}`;
    const UrlByCollection = `https://www.omdbapi.com/?apikey=${apikey}&s=${data}`;

    useEffect(
        ()=>{

            const sortMovies = (movies) => {
                // Triez les films en fonction de la valeur de 'sortBy'
                switch (sortBy) {
                    case 'year':
                        return movies.sort((a, b) => a.Year - b.Year);
                    case 'revenue':
                        return movies.sort((a, b) => a.BoxOffice - b.BoxOffice);
                    case 'duration':
                        return movies.sort((a, b) => a.Runtime - b.Runtime);
                    default:
                        return movies;
                }
            };


            if(selection === 'collection') {
                setSearchUrl(UrlByCollection);
            }
            if(selection === 'film') {
                setSearchUrl(UrlByTitle);
            }

            //traitement des données (requète fetch)
            fetch(searchUrl)
            .then((response)=> {
                if(!response.ok) {
                    throw new Error("L'API ne répond pas !");
                }
                return response.json();
            })
            .then((actualData)=> {
                if (actualData.Search) {
                    // Si les résultats sont une collection de films
                    const sortedData = sortMovies(actualData.Search);
                    setMoviesData(sortedData);
                } else {
                    // Si le résultat est un seul film
                    setMoviesData([actualData]);
                }
                setError(null);
                // console.log(actualData);
            })
            .catch((err)=>{
                setError(err.message);
                console.log(err.message);
            })
            .finally(()=>{
                setLoading(false);
            })
        },
        //tableau des dépendances éventuelles (qui déclenchent l'effet)
        [data, sortBy, selection, UrlByCollection, UrlByTitle, searchUrl]);
    
    return(
        <> 
            { loading && <div> données en chargement... </div> }
            { error && <div>erreur : {error}</div> }
            { data && ( 
                <>
                { searchUrl === UrlByCollection ? (
                  <CollectionCard data={moviesData} />
                ) : (
                  <MovieCard data={moviesData} />
                )}
              </>
            )}
        </>
    )
}



