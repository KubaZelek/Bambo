<!DOCTYPE html>
<html lang="pl-PL">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bambo</title>
  <link rel="stylesheet" href="CSS/login_and_registration.css">
</head>
<body>
  <div className="CreateAuction" class="Login">
        <h1>Dodaj ogłoszenie</h1>
          <form action='a_createauction.php' method='POST' enctype='multipart/form-data'>
          <label htmlFor="title">Nazwa przedmiotu</label>
          <input type="text" name="title" placeholder="Wpisz nazwę">

          <label htmlFor="photo">Zdjęcie przedmiotu</label>
          <input type="file" name="photo" accept="image/png, image/jpeg">

          <label htmlFor="price">Cena</label>
          <input type="number" name="price" placeholder="Wpisz cenę [zł]" min='0'>

          <label htmlFor="description">Dodaj opis</label>
          <textarea name="description" placeholder="Opisz przedmiot"></textarea>

          <button type="submit">Dodaj ogłoszenie</button>
        </form>
  </div>
</body>
</html>
    
    
    