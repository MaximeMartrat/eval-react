import MovieQuery from "../components/movieQuery";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faM} from "@fortawesome/free-solid-svg-icons";
export default function MovieSearch() {

    const [items, setItems] = useState("");
    const [itemName, setItemName] = useState("");

    const addItem = (evt) => {
        evt.preventDefault();
        setItems(itemName)
        setItemName("")
    }
    return(
        <div className="movie">
            <form onSubmit={addItem}>
                <label name='titre'><FontAwesomeIcon icon={faM} className='max' />AXFLIX</label>
                <input 
                    name="titre"
                    type="text"
                    value={itemName}
                    onChange={ e=> setItemName(e.target.value)}
                />
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            <>
                {items && <MovieQuery data={items} />}
            </>
        </div>
    )

};

