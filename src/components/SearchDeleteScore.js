import React, { useState } from 'react';
import axios from 'axios';
import "../styles.css";

const SearchDeleteScore = ({ fetchHighScores }) => {
    const [playerName, setPlayerName] = useState('');
    const [playerScore, setPlayerScore] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/high-scores`, { params: { player_name: playerName } });
            if (response.data.length > 0) {
                setPlayerScore(response.data[0].score);
            } else {
                setPlayerScore(null);
                alert('Player not found.');
            }
        } catch (error) {
            console.error('Error searching for player score:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/high-scores`, { params: { player_name: playerName } });
            alert('Score deleted successfully.');
            setPlayerScore(null);
            fetchHighScores();
        } catch (error) {
            console.error('Error deleting player score:', error);
        }
    };

    return (
        <div className="search-delete-score">
            <input
                type="text"
                placeholder="Enter player name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
            />
            <button onClick={handleSearch} style={{ backgroundColor: '#0353A4', color: '#B9D6F2' }}>Search Score</button>
            {playerScore !== null && (
                <div>
                    <p>{playerName}: {playerScore}</p>
                    <button onClick={handleDelete} style={{ backgroundColor: '#0353A4', color: '#B9D6F2' }}>Delete Score</button>
                </div>
            )}
        </div>
    );
};

export default SearchDeleteScore;