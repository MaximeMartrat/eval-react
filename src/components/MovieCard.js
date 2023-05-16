import './card.css';
export default function MovieCard({data}) {
    const fullstar = Array(5).fill('*');
    return (
        <>
        { data && data.map((key)=> { 
            return (
            <div className="movieCard" key={key.imdbID}>
                <img src={key.Poster} alt='affiche'/>
                <div className='content'>
                    <h1 className="titleMovie">{key.Title}</h1>
                    <p>Annee: {key.Year}</p>
                    <p>Duree :{key.Runtime}</p>
                    <p>Genre: {key.Genre}</p>
                    <p>Acteurs: {key.Actors}</p>
                    <p>Synopsis: {key.Plot}</p>
                    <p>Notes :{fullstar.slice(5-(key.imdbRating/2)).map(fullstar => {return <span>{fullstar}</span>})}</p>
                    <p>BoxOffice :{key.BoxOffice}</p>
                </div>
            </div>
            )
        })}
        </>
    )
}

