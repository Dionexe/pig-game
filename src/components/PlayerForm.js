import React, { useState } from 'react';

const PlayerForm = ({ startGame }) => {
    const [playerCount, setPlayerCount] = useState('');
    const [maxScore, setMaxScore] = useState('');
    const [playerNames, setPlayerNames] = useState([]);
    const [nameInputs, setNameInputs] = useState([]);

    const handleStart = () => {
        if (!playerCount || playerNames.length !== parseInt(playerCount)) {
            alert('Please fill out all fields correctly.');
            return;
        }
        startGame(playerNames, parseInt(maxScore));
    };

    const handlePlayerCountChange = (e) => {
        setPlayerCount(e.target.value);
        setNameInputs(Array(parseInt(e.target.value)).fill(''));
        setPlayerNames(Array(parseInt(e.target.value)).fill(''));
    };

    const handleNameChange = (index, value) => {
        const newNames = [...playerNames];
        newNames[index] = value;
        setPlayerNames(newNames);
    };

    return (
        <div>
            <h2>Enter the number of players (2 - 4):</h2>
            <input type="number" value={playerCount} onChange={handlePlayerCountChange} />
            {nameInputs.map((_, index) => (
                <div key={index}>
                    <h3>Enter name for Player {index + 1}:</h3>
                    <input
                        type="text"
                        value={playerNames[index]}
                        onChange={(e) => handleNameChange(index, e.target.value)}
                    />
                </div>
            ))}
            <button onClick={handleStart}>Start Game</button>
        </div>
    );
};

export default PlayerForm;
