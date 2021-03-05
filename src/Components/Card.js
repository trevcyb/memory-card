import React, { useState } from 'react';

const Card = (props) => {

    const {
        card: {name, imagesrc},
        gameLogic
    } = props;

    return (
        <div onClick={gameLogic} className="card">
            <h2>{name}</h2>
            <img src={imagesrc} alt={name}/>
        </div>
    )
}

export default Card;

