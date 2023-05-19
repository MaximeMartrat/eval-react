import './card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default function CollectionCard({data}) {
    const fullstar = Array(5).fill(<FontAwesomeIcon icon={faStar} />);
    return (
        <>
        { data && data.map((key)=> { 
            return (
            <div className="collectionCard" key={key.imdbID}>
                <img src={key.Poster} alt='affiche'/>
                <div className='content'>
                    <h1 className="titleMovie">{key.Title}</h1>
                    <p><span className='moviekey'>Annee:</span> {key.Year}</p>
                    <p><span className='moviekey'>Duree:</span> {key.Runtime}</p>
                    <p><span className='moviekey'>Notes:</span>{fullstar.slice(5-(key.imdbRating/2)).map(fullstar => {return <span className='star'> {fullstar}</span> })}</p>
                </div>
            </div>
            )
        })}
        </>
    )
}

