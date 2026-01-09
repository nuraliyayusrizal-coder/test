import express from 'express';
import db from './db.js'; // Guna './db.js' sebab dia satu level/folder dengan auth.js

const router = express.Router();

// Route For Sign Up
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
    
  try {
    await db.query(
      'INSERT INTO USER (USERNAME, EMAIL, PASSWORD_HASH) VALUES (?, ?, ?)',
      [username, email, password]
    );
    res.json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;