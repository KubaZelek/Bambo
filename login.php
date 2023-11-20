<!DOCTYPE html>
<html lang="pl-PL">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bambo</title>
  <link rel="stylesheet" href="CSS/login_and_registration.css">
</head>
<body>
    <div class="Login">
        <div class='all-rest'>
          <div class="login">
            


            <h1><span class="underline">Logowanie</span> / <a href="signup.php"><span>Rejstracja</span></a> </h1>

            <a href="index.php">

              <div class="minilogo">

                <img src='images\Logo_niebieskie_mniejsze.png' alt='logo' class='imgs'/>

              </div>

              </a>
            
            <div class='down'>


            
            <form action='a_login.php' method='POST' enctype='multipart/form-data'>
              <label htmlFor="username">Nazwa użytkownika:</label><br />
              <input type="text" name="username" placeholder="Wpisz nazwę"><br /><br />

              <p class='break'> </p>

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


