import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Malaysia', 
  database: 'algorythm_beats'
});

export default pool.promise();