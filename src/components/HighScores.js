import React from 'react';
import "../styles.css"

const HighScores = ({ highScores }) => {
    return (
        <div className="high-scores" id="high-scores">
            <h2>Top 3 High Scores:</h2>
            <ul id="high-scores-list">
                {highScores.map((score, index) => (
                    <li key={index}>{score.player_name}: {score.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default HighScores;
