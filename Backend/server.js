const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bambopl'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  console.log('Database is working')
})


app.listen(PORT , () => console.log("Working on port "+PORT))

app.post('/signup', async (req, res) => {
  const sql = "INSERT INTO users (`username`,`password`,`email`) VALUES (?, ? ,?)";
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  connection.query(sql, [username, password, email], (err, data) => {
    if(err) {
      console.error("SQL ERROR: " + err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });  
})

app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const checkUserQuery = "SELECT * FROM users WHERE username = ?";
  connection.query(checkUserQuery, [username], (err, userData) => {
    if (err) {
      console.error("SQL ERROR: " + err);
      return res.status(500).json(err);
    }
    if (userData.length === 0) {
      return res.status(401).json({ message: "Nieprawidłowa nazwa użytkownika lub hasło." });
    }
    const user = userData[0];
    if (user.password !== password) {
      return res.status(401).json({ message: "Nieprawidłowa nazwa użytkownika lub hasło." });
    }
    // Ustaw sesję lub token uwierzytelniający dla użytkownika
    // Tu możesz użyć rozwiązań do zarządzania sesją lub tokenami, takie jak Express Session, Passport, JWT itp.
    // Przykładowo, można użyć JWT do generowania i przesyłania tokena użytkownika w odpowiedzi

    const jwtToken = generateJwtToken(user.username);
    res.status(200).json({ message: "Zalogowano pomyślnie", token: jwtToken });
  });
});

function generateJwtToken(username) {
  // Tutaj generujesz token JWT na podstawie nazwy użytkownika
  // i zwracasz go jako string
  // Możesz użyć biblioteki jsonwebtoken do generowania tokenów JWT
  // np. const jwt = require('jsonwebtoken');

  // Przykład generowania tokena:
  // const token = jwt.sign({ username }, 'tajnySekret', { expiresIn: '1h' });
  
  // Zwracasz wygenerowany token
  // return token;
}

app.post('/create_auction', async (req, res) => {
  const sql = "INSERT INTO auctions (`title`,`photo`,`price`,`description`) VALUES (?, ? ,?, ? )";
  const title = req.body.title;
  const photo = req.body.photo;
  const price = req.body.price;
  const description = req.body.description;
  connection.query(sql, [title, photo, price, description], (err, data) => {
    if(err) {
      console.error("SQL ERROR: " + err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });  
})
