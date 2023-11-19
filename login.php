<!DOCTYPE html>
<html lang="pl-PL">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bambo</title>
</head>
<body>
    <div className="Login">
        <div className='all-rest'>
          <div className="login">
            


            <h1><span class="underline">Logowanie</span> / <a href="signup.php"><span>Rejstracja</span></a> </h1>

            <a href="index.html">

              <div className="minilogo">

                <img src='images/logo.png' alt='logo' className='imgs'/>

              </div>

              </a>
            
            <div className='down'>


            
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Nazwa użytkownika:</label><br />
              <input type="text" name="username" placeholder="Wpisz nazwę"><br /><br />

              <p className='break'> </p>

              <label htmlFor="password">Hasło:</label><br />
              <input type="password" name="password" placeholder="Wpisz hasło"><br />
              <button type="submit">Zaloguj</button>
            </form>

            </div>
          
          </div>
        </div>
    </div>
</body>
</html>


