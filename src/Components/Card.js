import React, { useState } from 'react';

const Card = (props) => {

    const {
        card: {name, imagesrc},
    } = props;

    const [isClicked, setisClicked] = useState(false);

    const clickCard = () => {
        setisClicked(true);
    }

    return (
        <div onClick={clickCard} className="card">
            <h2>{name}</h2>
            <img src={imagesrc} alt={props.name}/>
        </div>
    )
}

export default Card;

