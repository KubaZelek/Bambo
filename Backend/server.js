const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const jwt = require('jsonwebtoken'); 


app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(session({
  secret: 'KochamBambo',
  resave: false,
  saveUninitialized: true
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

//Logowanie

app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sql = "SELECT * FROM users WHERE username = ?";
  connection.query(sql, [username], (err, userData) => {
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

    req.session.user = user;

    function generateJwtToken(username) {
      const secretKey = 'klucz';
      const token = jwt.sign({ username }, secretKey, { expiresIn: '2h' })
      return token;
    }
    const jwtToken = generateJwtToken(user.username);
    res.status(200).json({ message: "Zalogowano pomyślnie", token: jwtToken });
  });
});

//Aukcja

const PhotoPath = 'public/photo/';

app.post('/create_auction', (req, res) => {
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
      connection.query(sql, [Title, Photo, Price, Description, soldBy], (err) => {
        if (err) {
          return res.status(500).send(err);
        }

        res.send('Przesyłanie zakończone');
      });
    });
  } else {
    return res.status(400).send('Nie przesłano zdjęcia.');
  }
});

/*app.get('/profile', (req, res) => {
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ message: "Użytkownik nie jest zalogowany." });
  }

  // Wykonaj operacje związane z profilem użytkownika
  res.json(user);
});*/
