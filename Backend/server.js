const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt');


app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(session({
  secret: 'KochamBambo',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}));
app.use(express.static('public'));

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

//Rejestracja

app.post('/signup', async (req, res) => {
  const sql = "INSERT INTO users (username, password, email, age) VALUES (?, ?, ?, ?)";
  const { username, password, email, age } = req.body;
  connection.query(sql, [username, password, email, age], (err, data) => {
    if (err) {
      console.error("SQL ERROR: " + err);
      return res.status(500).json({ message: "Error while signing up" });
    }
    return res.json({ message: "User signed up successfully" });
  });
});

//Logowanie


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ?";
  connection.query(sql, [username], async (err, userData) => {
    if (err) {
      console.error("SQL ERROR: " + err);
      return res.status(500).json(err);
    }
    if (userData.length === 0) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const user = userData[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    req.session.user = user;

    function generateJwtToken(username) {
      const secretKey = 'klucz';
      const token = jwt.sign({ username }, secretKey, { expiresIn: '2h' });
      return token;
    }
    const jwtToken = generateJwtToken(user.username);
    res.status(200).json({ message: "Logged in successfully", token: jwtToken });
    // res.redirect('/home'); // Remove this line, handle redirection in the front end
  });
});
//Aukcja

const PhotoPath = 'public/photo/';

app.post('/create_auction', (req, res) => {
  console.log('Sesja:' , req.session);

  if(!req.session || !req.session.user){
    console.error("Sesja albo uzytkownik nie istnieje");
    return res.status(401).json({message: "Unauthorized"});
  }
  const Title = req.body.title;
  const Price = req.body.price;
  const Description = req.body.description;
  const soldBy = req.session.user.username;
  const Photo = req.files.photo;

  if (Photo) {
    const PhotoName = Photo.name;
    Photo.mv(PhotoPath + PhotoName, (err) => {
      if (err) {
        return res.status(500).send(err);
      }

      const sql = 'INSERT INTO auctions (title, photo, price, description, sold_by) VALUES (?, ?, ?, ?, ?)';
      connection.query(sql, [Title, PhotoPath + PhotoName, Price, Description, soldBy], (err) => {
        if (err) {
          return res.status(500).send(err);
        }

        res.send('Przesyłanie zakończone');
        res.redirect('/profile');
      });
    });
  } else {
    return res.status(400).send('Nie przesłano zdjęcia.');
  }
});

app.get('/profile', (req, res) => {
  const user = req.session.user;

  if (!user) {
    res.redirect('/login');
    return res.status(401).json({ message: "Użytkownik nie jest zalogowany." });
  }

  // Wykonaj operacje związane z profilem użytkownika
  res.json(user);
});

app.get('/search', (req, res) => {
  const searchTerm = req.query.searchTerm; // Get the search term from the query string

  const sql = `SELECT * FROM auctions WHERE title LIKE '%${searchTerm}%' OR description LIKE '%${searchTerm}%'`;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error searching in database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    res.json(results); // Return the search results as JSON
  });
});
