import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
export default function MovieQuery(items) {
    const [data,setData] = useState(null);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(true);
    const movie = Object.keys(items).map(key => items[key]);
    const Url = `https://www.omdbapi.com/?apikey=48897788&t=`+ movie
    useEffect(
        ()=>{
            //traitement des données (requète fetch)
            fetch(Url)
            .then((response)=> {
                if(!response.ok) {
                    throw new Error("L'API ne répond pas !");
                }
                return response.json();
            })
            .then((actualData)=> {
                setData([actualData]);
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
        [Url]
    )
    return(
        <> 
            { loading && <div> données en chargement... </div> }
            { error && <div>erreur : {error}</div> }
            { data && <MovieCard data={data} /> }
        </>
    )
}



