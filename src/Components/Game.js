import React, { useState } from 'react';
import Display from './Display';
import Header from './scoreHeader';

function Game() {
    const [score, setScore] = useState(0);
    const [highScore, sethighScore] = useState(0);
    const [cardsArr, setcardsArr] = useState([]);

    const handleScore = () => {
        setScore((prevScore) => prevScore + 1);
    }

    const handlehighScore = () => {
        sethighScore(score);
    }

    const handlecard = (cardName) => {
        setcardsArr((prevArr) => [...prevArr, cardName]);
    }

    const resetGame = () => {
        setScore(0);
        setcardsArr([]);
    }

    const gameLogic = (cardName) => {
        if (!cardsArr.includes(cardName)) {
            handlecard(cardName);
            handleScore();
        } else {
            handlehighScore();
            resetGame();
        }
    };

    return (
        <div>
            <Header score={score} highScore={highScore} />
            <div className="container">
                <Display gameLogic={gameLogic} score={score} highScore={highScore} />
            </div>
        </div>
    )
}

export default Game;