<?php 
error_reporting(E_ALL ^ E_WARNING);
session_start();
?>

<!DOCTYPE html>
<html lang="pl-PL">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bambo</title>
  <link rel="stylesheet" href="CSS/login_and_registration.css">
</head>
<body>

<a href="index.php">

<div class="minilogo">
  <img src='images\Logo_niebieskie_mniejsze.png' alt='logo' class='imgs'/>
</div>
</a>
  <div class="login">
    <div class="down">
        <h1>Dodaj ogłoszenie</h1>
          <form action='a_createauction.php' method='POST' enctype='multipart/form-data'>
          <label htmlFor="title">Nazwa przedmiotu  <input type="text" name="title" placeholder="Wpisz nazwę"></label>
         
          <p class='break'> </p>

          <label htmlFor="photo">Zdjęcie przedmiotu <input type="file" name="photo" accept="image/png, image/jpeg"></label>
          <br>
          <p class='break'> </p>
          <label htmlFor="price">Cena <input type="number" name="price" placeholder="Wpisz cenę [zł]" min='0'></label>
          <p class='break'> </p>
          <input type='hidden' name='sold_by' value = "<?php echo $_SESSION['login']; ?>">
          <p class='break'> </p>
          <label htmlFor="description">Dodaj opis</label>
          <textarea name="description" placeholder="Opisz przedmiot"></textarea>
          <p class='break'> </p>
          <button type="submit">Dodaj ogłoszenie</button>
        </form>
        </div>
  </div>
</body>
</html>
    
    
    