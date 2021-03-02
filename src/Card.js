import React, { Component, useState } from 'react';

const Card = (props) => {
    const [isClicked, setisClicked] = useState(false);

    const clickCard = () => {
        setisClicked(true);
    }

    return (
        <div onClick={clickCard}>
            <h2>{props.name}</h2>
            <img src={props.imagesrc}/>
        </div>
    )
}

