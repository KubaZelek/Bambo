<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bambo</title>
</head>
<body>
<div className="Signup">
        <div className="login">
          <h1>
            <a href="login.php">
              <span>Logowanie</span>
            </a>
            <span>/ </span>
            <a href="signup.php">
              <span className="underline">Rejstracja</span>
            </a>
          </h1>

          <a href="index.html">
            <div className="minilogo">
              <img src="images/logo.png" alt="Logo" className="imgs" />
            </div>
          </a>

          <div className="down">
            <form >
              <label htmlFor="username">Nazwa użytkownika<span className='nessesary'>*</span></label><br>
              <input type="text" name="username" placeholder="Wpisz nazwę"><br>

              <p className='break'> </p>

              <label htmlFor="password">Hasło<span className='nessesary'>*</span></label><br>
              <input type="password" name="password" placeholder="Wpisz hasło"><br>

              <p className='break'> </p>

              <label htmlFor="email">E-mail<span className='nessesary'>*</span></label><br>
              <input type="text" name="email" placeholder="Wpisz e-mail"><br>

              <p className='break'> </p>

              <label htmlFor="age">Wiek użytkownika<span className='nessesary'>*</span></label><br>
              <input type="number" placeholder="18" name="age" min="13" max="100" step="1"><br>

              <p className='break'> </p>

              <table>
                <tr>
                  <td colSpan={4}><label htmlFor="company">Konto Firmowe</label></td>
                </tr>
                <tr>
                  <td><span className='YesNo'>Tak</span></td>
                  <td><input type="radio" name="company" id="company" value="Tak"></td>
                  <td><span className='YesNo'>Nie</span></td>
                  <td><input type="radio" name="company" id="company" value="Nie"></td>
              </tr>
              <button type="submit">Przejdź dalej</button>
              <a href="/accountsignup" className='company_acc'>
              <span>Chcesz założyć konto firmowe?</span>
              </a>
            </form>
          </div>
        </div>
    </div>
</body>
</html>


