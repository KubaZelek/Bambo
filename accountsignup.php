<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bambo</title>
  <link rel="stylesheet" href="CSS/login_and_registration.css">
</head>
<body>
  <div class="login">
          <h1>
               Rejstracja kont firmowych
          </h1>

          <a href="index.php">
            <div class="minilogo">
              <img src='images\Logo_niebieskie_mniejsze.png' alt="Logo" class="imgs" />
            </div>
          </Link>

          <div class="down">
            <form action='a_accountsignup.php' method='POST' enctype='multipart/form-data'>

              <label htmlFor="account_name">Nazwa firmy<span class='nessesary'>*</span></label><br />
              <input type="text" name="company_name" placeholder="Wpisz nazwę firmy"><br />

              <p class='break'> </p>

              <label htmlFor="password">Hasło<span class='nessesary'>*</span></label><br />
              <input type="password" name="password" placeholder="Wpisz hasło do konta firmowego"><br />

              <p class='break'> </p>

              <label htmlFor="email">E-mail<span class='nessesary'>*</span></label><br />
              <input type="text" name="email" placeholder="Wpisz e-mail firmowy"><br />

              <p class='break'> </p>

              <label htmlFor="account_name">NIP<span class='nessesary'>*</span></label><br />
              <input type="text" name="NIP" placeholder="Wpisz NIP swojej firmy"><br />

              <p class='break'> </p>

              <button type="submit">Przejdź dalej</button>
            </form>
        </div>
    </div>
  </div>

</body>
</html>
  
    
        