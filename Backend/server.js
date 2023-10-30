const mysql = require('mysql')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

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

connection.end()

app.listen(PORT , () => console.log("Working on port "+PORT))
