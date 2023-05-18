import React, { useState } from 'react';
import MovieQuery from "../components/movieQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faM} from "@fortawesome/free-solid-svg-icons";

export default function MovieSearch({apikey}) {

    const [items, setItems] = useState("");
    const [itemName, setItemName] = useState("");
    const [selection, setSelection] = useState('collection');
    const [sortBy, setSortBy] = useState('year');

    const addItem = (evt) => {
        evt.preventDefault();
        setItems(itemName);
        setItemName("");
    }

    const handleChange = (e) => {
        setSelection(e.target.value);
        setSortBy(e.target.value);
    };

    return(
        <div className="movie">
            <form onSubmit={addItem}>
                <label name='titre'>
                    <FontAwesomeIcon icon={faM} className='max' />AXFLIX
                </label>
                <input 
                    name="titre"
                    type="text"
                    value={itemName}
                    onChange={ e=> setItemName(e.target.value)}
                />
                <select className="trie" value={selection} onChange={handleChange}>
                    <option value="film">Film</option>
                    <option value="collection">Collection</option>
                </select>
                <select className="trie" value={sortBy} onChange={handleChange}>
                    <option value="year">Année</option>
                    <option value="revenue">Revenu</option>
                    <option value="duration">Durée</option>
                </select>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            {items && <MovieQuery data={items} selection={selection} sortBy={sortBy} apikey={apikey}/>}
        </div>
    )

};

