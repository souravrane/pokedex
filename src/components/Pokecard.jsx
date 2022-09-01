import React from "react";
import "./Pokecard.css";

const POKE_IMG_API =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

function Pokecard({ id, name, type, exp }) {
    const imageSrc = `${POKE_IMG_API}/${padToThree(id)}.png`;

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
