<?php
    // item_details.php

    error_reporting(E_ALL ^ E_WARNING);

    function uzytkownik()
    {
        if (!isset($_SESSION['login'])) return 'brak';
        if ($_SESSION['login'] == '') return 'brak';
        return $_SESSION['login'];
    }

    @session_start();
    $baza = mysqli_connect('localhost', 'root', '', 'bambopl');
    if ($baza->connect_error) {
        die("Connection failed: " . $baza->connect_error);
    }

    // Check if the 'id' parameter is set in the URL
    if (isset($_GET['id'])) {
        $item_id = $_GET['id'];

        // Retrieve item details from the database
        $result = mysqli_query($baza, "SELECT * FROM auctions WHERE id = $item_id");

        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);

            // Display item details
            echo '<section class="oneoffer">';
          echo '  <img class="ad-image" src="' . $row['photo'] . '" alt="zdjecie przedmiotu" />';
            echo '<h2>' . $row['title'] . '</h2>';
            echo '<p>Opis: ' . $row['description'] . '</p>';
            echo '<h2>Cena: ' . $row['price'] . 'zł</h2>';
            echo '<p> Sprzedający: '.$row['sold_by'].'</p>';
            echo '<a href="#" class="buy"> Kupuję</a>';
            // Add more details as needed
            echo '</section>';
        } else {
            echo 'Item not found';
        }
    } else {
        echo 'Invalid item ID';
    }

    mysqli_close($baza);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bambo</title>
    <link rel="stylesheet" href="CSS/offers.css">
</head>
<body>
    


</body>
</html>
