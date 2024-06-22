// App.js
import React from 'react';
import Game from './components/Game';
import './styles.css'; // Adjusted path to import the CSS file

function App() {
    return (
        <div className="centered">
            <h1>Welcome to Dion's Pig Game</h1>
            <Game />
        </div>
    );
}

export default App;

