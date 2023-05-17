import './card.css';

export default function CollectionCard({data}) {
    return (
        <>
        { data && data.map((key)=> { 
            return (
            <div className="movieCard" key={key.imdbID}>
                <img src={key.Poster} alt='affiche'/>
                <div className='content'>
                    <h1 className="titleMovie">{key.Title}</h1>
                    <p><span className='moviekey'>Annee:</span> {key.Year}</p>
                </div>
            </div>
            )
        })}
        </>
    )
}

