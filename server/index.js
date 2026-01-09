import express from 'express';
import cors from 'cors';
import db from './db.js'; 
import authRoutes from './auth.js'; 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Auth Routes (Signup, LogIn)
app.use('/api', authRoutes); 

// 2. Track Routes
app.get('/api/tracks', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tracks');
    res.json(rows); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Database Check Route
app.get('/check-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    res.send('Backend Algorythm Beats is connected.');
  } catch (err) {
    res.status(500).send('Database Error: ' + err.message);
  }
});

// 4. Server Listener 
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});