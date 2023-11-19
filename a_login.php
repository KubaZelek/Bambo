<?php
    $login = $_POST['username'];
    $plain_password = $_POST['password'];

    // Haszowanie hasła
    $hashed_password = hash('sha256', $plain_password);

    $db = mysqli_connect('localhost','root','','bambopl');
  
    // Użyj funkcji mysqli_real_escape_string, aby zabezpieczyć dane przed SQL Injection
    $login = mysqli_real_escape_string($db, $login);

    // Pobranie zahashowanego hasła z bazy danych
    $query = "SELECT password FROM users WHERE username ='$login'";
    $result = mysqli_query($db, $query);

    if ($result) {
        if (mysqli_num_rows($result) === 1) {
            $row = mysqli_fetch_assoc($result);
            $stored_hashed_password = $row['password'];

            // Porównanie zahashowanego hasła z wprowadzonym przez użytkownika
            if (hash_equals($stored_hashed_password, $hashed_password)) {
                session_start();
                $_SESSION['login'] = $login;
                echo "<script>document.location='index.php'</script>";
            } else {
                echo "<script>alert('Nieprawidłowe hasło. Spróbuj ponownie.');document.location='login.php'</script>";
            }
        } else {
            echo "<script>alert('Nieprawidłowy login. Spróbuj ponownie.');document.location='login.php'</script>";
        }
    } else {
        echo "<script>alert('Błąd zapytania. Spróbuj ponownie.');document.location='login.php'</script>";
    }

    mysqli_close($db);

    error_reporting(E_ALL ^ E_WARNING);
?>
