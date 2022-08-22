import React from "react";
import "./Pokecard.css";

const POKE_IMG_API =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokecard({ id, name, type, exp }) {
    const imageSrc = `${POKE_IMG_API}/${id}.png`;

    return (
        <div>
            <div className="Pokecard">
                <h1>{name}</h1>
                <img src={imageSrc} alt={name} />
                <div>Type: {type}</div>
                <div>Exp: {exp}</div>
            </div>
        </div>
    );
}

export default Pokecard;
