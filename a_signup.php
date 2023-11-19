<?php
    $login = $_POST['login'];
    $plain_password = $_POST['haslo'];

    $hashed_password = hash('sha256', $plain_password);

    $db = mysqli_connect('localhost','root','','bambopl');

    $login = mysqli_real_escape_string($db, $login);
    $hashed_password = mysqli_real_escape_string($db, $hashed_password);

    // Sprawdź, czy istnieje już użytkownik o podanej nazwie
    $check_query = "SELECT * FROM accounts WHERE login='$login'";
    $check_result = mysqli_query($db, $check_query);
    if (mysqli_num_rows($check_result) > 0) {
        echo "<script>alert('Nazwa użytkownika jest już zajęta. Wybierz inną nazwę.')</script>";
    } else {
        // Dodaj konto, jeśli nazwa użytkownika nie jest zajęta
        $query = "INSERT INTO accounts (login, password) VALUES ('$login', '$hashed_password')";
        $result = mysqli_query($db, $query);
        if ($result) {
            echo "<script>alert('Pomyślnie zarejestrowano.')</script>";
            session_start();
            $_SESSION['login'] = $login;
        } else {
            echo "<script>alert('Błąd podczas rejestracji.')</script>";
        }
    }
    mysqli_close($db);
    error_reporting(E_ALL ^ E_WARNING);
?>

<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dropout</title>
    <link rel="shortcut icon" href="graphics/logodropout.jpg">
    <meta http-equiv="refresh" content="0.1; url=index.php">
</head>
<body>

</body>
</html>