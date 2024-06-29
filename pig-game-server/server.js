const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com");
    next();
});

app.get('/high-scores', async (req, res) => {
    try {
        const result = await pool.query('SELECT player_name, score FROM scores ORDER BY score DESC LIMIT 3');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/high-scores', async (req, res) => {
    const { player_name, score } = req.body;
    try {
        await pool.query('INSERT INTO scores (player_name, score) VALUES ($1, $2)', [player_name, score]);
        res.status(201).send('Score added');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});

