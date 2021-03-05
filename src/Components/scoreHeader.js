import React from "react";

const Header = (props) => {
  const { score, highScore } = props;

  return (
    <header className="header">
      <h1>Yu-Gi-Oh Memories</h1>
      <div className="scoreboard">
        <p className="scoredisplay">Score: {score}</p>
        <p className="highscoredisplay">HighScore: {highScore}</p>
      </div>
    </header>
  );
};

export default Header;
