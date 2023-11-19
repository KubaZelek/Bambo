<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bambo</title>
  <link rel="stylesheet" href="CSS/login_and_registration.css">
</head>
<body>
  <div className="login">
          <h1>
               Rejstracja kont firmowych
          </h1>

          <a href="index.html">
            <div className="minilogo">
              <img src='images/logo.png' alt="Logo" className="imgs" />
            </div>
          </Link>

          <div className="down">
            <form action='a_accountsignup.php' method='POST' enctype='multipart/form-data'>

              <label htmlFor="account_name">Nazwa firmy<span className='nessesary'>*</span></label><br />
              <input type="text" name="account_name" placeholder="Wpisz nazwę firmy"><br />

              <p className='break'> </p>

              <label htmlFor="password">Hasło<span className='nessesary'>*</span></label><br />
              <input type="password" name="password" placeholder="Wpisz hasło do konta firmowego"><br />

              <p className='break'> </p>

              <label htmlFor="email">E-mail<span className='nessesary'>*</span></label><br />
              <input type="text" name="email" placeholder="Wpisz e-mail firmowy"><br />

              <p className='break'> </p>

              <label htmlFor="account_name">NIP<span className='nessesary'>*</span></label><br />
              <input type="text" name="account_name" placeholder="Wpisz NIP swojej firmy"><br />

              <p className='break'> </p>

              <button type="submit">Przejdź dalej</button>
            </form>
        </div>
    </div>
  </div>

</body>
</html>
  
    
        