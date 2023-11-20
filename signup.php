<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bambo</title>
  <link rel="stylesheet" href="CSS/login_and_registration.css">
</head>
<body>
<div class="Signup">
        <div class="login">
          <h1>
            <a href="login.php">
              <span>Logowanie</span>
            </a>
            <span>/ </span>
            <a href="signup.php">
              <span class="underline">Rejstracja</span>
            </a>
          </h1>

          <a href="index.php">
            <div class="minilogo">
              <img src="images\Logo_niebieskie_mniejsze.png" alt="Logo" class="imgs" />
            </div>
          </a>

          <div class="down">
            <form action='a_signup.php' method='POST' enctype='multipart/form-data'>
              <label htmlFor="username">Nazwa użytkownika<span class='nessesary'>*</span></label><br>
              <input type="text" name="username" placeholder="Wpisz nazwę"><br>

              <p class='break'> </p>

              <label htmlFor="password">Hasło<span class='nessesary'>*</span></label><br>
              <input type="password" name="password" placeholder="Wpisz hasło"><br>

              <p class='break'> </p>

              <label htmlFor="email">E-mail<span class='nessesary'>*</span></label><br>
              <input type="text" name="email" placeholder="Wpisz e-mail"><br>

              <p class='break'> </p>

              <label htmlFor="age">Wiek użytkownika<span class='nessesary'>*</span></label><br>
              <input type="number" placeholder="18" name="age" min="13" max="100" step="1"><br>

              <p class='break'> </p>

              <!---
              <table>
                <tr>
                  <td colSpan={4}><label htmlFor="company">Konto Firmowe</label></td>
                </tr>
                <tr>
                  <td><span class='YesNo'>Tak</span></td>
                  <td><input type="radio" name="company" id="company" value="Tak"></td>
                  <td><span class='YesNo'>Nie</span></td>
                  <td><input type="radio" name="company" id="company" value="Nie"></td>
              </tr>
              -->
              <button type="submit">Przejdź dalej</button>
              <a href="accountsignup.php" class='company_acc'>
              <span>Chcesz założyć konto firmowe?</span>
              </a>
            </form>
          </div>
        </div>
    </div>
</body>
</html>


