Overview

This project is a simple web-based game built using React and Node.js. The game allows players to roll dice and accumulate scores. The first player to reach a set maximum score wins the game. The top scores are stored in a PostgreSQL database and displayed on the high scores list.

File Descriptions

Game.js

	•	Description: This file contains the main game logic and user interface.
	•	Key Components:
	•	State Management: Manages the game state including the current score, player scores, and high scores.
	•	Game Functions: Functions to start the game, roll the dice, end the turn, handle a win, and reset the game.
	•	HighScores Component: Displays the top 3 high scores fetched from the server.

server.js

	•	Description: This file sets up the backend server using Express.js.
	•	Key Features:
	•	Middleware: Uses CORS and body-parser for handling requests.
	•	Database Connection: Connects to a PostgreSQL database using the pg library.
	•	Routes:
	•	GET /high-scores: Fetches the top 3 high scores from the database.
	•	POST /high-scores: Adds a new high score to the database.
	•	GET /: Serves the static files for the frontend.

HighScores.js

	•	Description: This file contains the React component to display the high scores.
	•	Key Features:
	•	Props: Receives highScores as a prop to display the top 3 high scores.
	•	Rendering: Displays the high scores in a list format.

Setup Instructions

	1.	Clone the repository:
        git clone https://github.com/yourusername/yourrepository.git
        cd yourrepository
    
    2.	Install dependencies:
        npm install
    
    3.	Set up environment variables:
		Create a .env file in the root directory with the following variables:
        PG_USER=your_pg_user
        PG_HOST=your_pg_host
        PG_DATABASE=your_pg_database
        PG_PASSWORD=your_pg_password
        PG_PORT=your_pg_port

    4.	Run the server:
        nodemon server.js

    5.	Run the frontend:
		Navigate to the frontend directory and start the React application:
        cd pig-game 
        npm start

Usage

	•	Open your browser and navigate to http://localhost:3000.
	•	Enter player names and set a maximum score to start the game.
	•	Players take turns rolling the dice to accumulate scores.
	•	The game ends when a player reaches the maximum score, and the winner’s score is saved to the high scores list.
	•	The high scores list is displayed at the bottom of the game screen.

Dependencies

	Frontend:
	•	React
	•	Axios
	Backend:
	•	Express.js
	•	CORS
	•	Body-parser
	•	pg (node-postgres)
	•	dotenv

Future Plans
    •	Add a online multiplayer function so two people can play from two different computers in two seperate rooms
	•	Add more dice games like a race or a turn based attack game
	•	Add a 3d render of a dice that actually roll when you press the roll button
	



For any questions or issues, please contact [dw.execomputers@gmail.com]