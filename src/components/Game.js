import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerForm from './PlayerForm';
import HighScores from './HighScores';
import SearchDeleteScore from './SearchDeleteScore'; // Import the new component
import "../styles.css";

const Game = () => {
    const [maxScore, setMaxScore] = useState(50); 
    const [players, setPlayers] = useState([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [playerScores, setPlayerScores] = useState([]);
    const [highScores, setHighScores] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        fetchHighScores();
    }, []);

    const fetchHighScores = async () => {
        try {
            const response = await axios.get('/high-scores');
            setHighScores(response.data);
        } catch (error) {
            console.error('Error fetching high scores:', error);
        }
    };

    const startGame = (playerNames, maxScore) => {
        setPlayers(playerNames);
        setPlayerScores(Array(playerNames.length).fill(0));
        setCurrentPlayerIndex(0);
        setCurrentScore(0);
        setMaxScore(maxScore);  
        setGameStarted(true);
    };

    const rollDice = () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        if (roll === 1) {
            setCurrentScore(0);
            endTurn(true);
        } else {
            const newScore = currentScore + roll;
            setCurrentScore(newScore);
        }
    };

    const endTurn = (rolledOne = false) => {
        const newScores = [...playerScores];
        if (!rolledOne) {
            newScores[currentPlayerIndex] += currentScore;
        }
        setPlayerScores(newScores);
        setCurrentScore(0);

        if (newScores[currentPlayerIndex] >= maxScore) {
            handleWin(players[currentPlayerIndex], newScores[currentPlayerIndex]);
        } else {
            setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
        }
    };

    const handleWin = async (winnerName, winnerScore) => {
        try {
            await axios.post('/high-scores', {
                player_name: winnerName,
                score: winnerScore
            });
            alert(`${winnerName} wins with a score of ${winnerScore}!`);
            resetGame();
        } catch (error) {
            console.error('Error storing high score:', error);
        }
    };

    const resetGame = () => {
        setPlayers([]);
        setCurrentPlayerIndex(0);
        setCurrentScore(0);
        setPlayerScores([]);
        setGameStarted(false);
        fetchHighScores();
    };

    return (
        <div style={{ backgroundColor: '#061A40', color: '#B9D6F2', padding: '20px' }}>
            {!gameStarted ? (
                <>
                    <PlayerForm startGame={startGame} />
                    <SearchDeleteScore fetchHighScores={fetchHighScores} /> {/* Add the new component */}
                </>
            ) : (
                <>
                    <h1>{players[currentPlayerIndex]}'s turn</h1>
                    <h2>Current turn score: {currentScore}</h2>
                    <button onClick={rollDice} style={{ backgroundColor: '#0353A4', color: '#B9D6F2' }}>Roll</button>
                    <button onClick={() => endTurn(false)} style={{ backgroundColor: '#0353A4', color: '#B9D6F2' }}>End Turn</button>
                    <div>
                        {players.map((player, index) => (
                            <div key={index}>
                                {player}: {playerScores[index]}
                            </div>
                        ))}
                    </div>
                </>
            )}
            <HighScores highScores={highScores} />
        </div>
    );
};

export default Game;





