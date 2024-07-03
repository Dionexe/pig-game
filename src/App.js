// App.js
// App.js
import React, { useEffect } from 'react';
import Game from './components/Game';
import './styles.css'; // Adjusted path to import the CSS file
import twoDice from './dice.png'; // Import the new image

function App() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const images = document.querySelectorAll('.orbiting-image');
            images.forEach(image => image.classList.add('show'));
        }, 1000); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className="centered">
            <div className="orbit-container">
                <img src={twoDice} className="orbiting-image" alt="Two Dice" />
                <img src={twoDice} className="orbiting-image" alt="Two Dice" />
                <img src={twoDice} className="orbiting-image" alt="Two Dice" />
            </div>
            <h1>Welcome to Dion's Pig Game</h1>
            <Game />
        </div>
    );
}

export default App;
