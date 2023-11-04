const mysql = require('mysql')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const cors = require('cors')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bambopl'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err
  console.log('Database is working')
})

app.use(cors());
app.use(express.json());

app.listen(PORT , () => console.log("Working on port "+PORT))

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO users (`username`,`password`,`email`) values (?)";
  const values = [
    req.body.username,
    req.body.password,
    req.body.email
  ]
  connection.query(sql, [values], (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})

