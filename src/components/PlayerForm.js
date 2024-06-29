import React, { useState } from 'react';

const PlayerForm = ({ startGame }) => {
    const [playerNames, setPlayerNames] = useState(['']);
    const [maxScore, setMaxScore] = useState(50); 

    const handleAddPlayer = () => {
        setPlayerNames([...playerNames, '']);
    };

    const handleRemovePlayer = (index) => {
        const newPlayerNames = [...playerNames];
        newPlayerNames.splice(index, 1);
        setPlayerNames(newPlayerNames);
    };

    const handlePlayerNameChange = (index, value) => {
        const newPlayerNames = [...playerNames];
        newPlayerNames[index] = value;
        setPlayerNames(newPlayerNames);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        startGame(playerNames, maxScore); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Enter Player Names</h2>
            {playerNames.map((name, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                    />
                    <button type="button" onClick={() => handleRemovePlayer(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={handleAddPlayer}>Add Player</button>
            <div>
                <label>Max Score:</label>
                <input
                    type="number"
                    value={maxScore}
                    onChange={(e) => setMaxScore(Number(e.target.value))} 
                />
            </div>
            <button type="submit">Start Game</button>
        </form>
    );
};

export default PlayerForm;
