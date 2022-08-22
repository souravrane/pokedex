import React from "react";
import "./Pokecard.css";

const POKE_IMG_API =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokecard({ id, name, type, exp }) {
    const imageSrc = `${POKE_IMG_API}/${id}.png`;

    return (
        <div>
            <div className="Pokecard">
                <h2 className="Pokecard-title">{name}</h2>
                <img src={imageSrc} alt={name} />
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">Exp: {exp}</div>
            </div>
        </div>
    );
}

export default Pokecard;
