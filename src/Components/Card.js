import React, { useState } from "react";

const Card = (props) => {
  const {
    card: { name, imagesrc },
    gameLogic
  } = props;

  return (
    <div onClick={gameLogic.bind(this, name)} className="card">
      <img src={imagesrc} alt={name} />
    </div>
  );
};

export default Card;
