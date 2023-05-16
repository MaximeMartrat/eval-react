import MovieQuery from "../components/movieQuery";
import React, { useState } from 'react';

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
                <label name='titre'>Choisissez le film</label>
                <input 
                    name="titre"
                    type="text"
                    value={itemName}
                    onChange={ e=> setItemName(e.target.value)}
                />
                <button>ok</button>
            </form>
            <>
                {items && <MovieQuery data={items} />}
            </>
        </div>
    )

};

