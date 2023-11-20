<?php
    error_reporting(E_ALL ^ E_WARNING);
    function uzytkownik()
    {
        if (!isset($_SESSION['login'])) return 'brak';
        if ($_SESSION['login']=='') return 'brak';
        return $_SESSION['login'];
    }
?>
<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="stylesheet" href="CSS/offers.css">
    <title>Bambo.pl - najlepsze ubrania</title>
</head>
<body>
    <div class="navbar">
        <img class='logohp' src="images/logo.png" alt="logo"/>
        <div class="search-container">
        <form action="index.php" method="post">
    <input placeholder="Ulubione produkty tutaj!" type="text" class="search-bar" name="search-bar" />
    <input type="submit" value="Szukaj" class="search-button" name="btn">
      </form>
            </div>
         <div class="links">
         <?php
                    @session_start();
                    if(isset($_SESSION['login'])){
                        echo'
                        <img class="image" src="images/account.svg" alt="account" />
                        <span class="s">&nbsp;&nbsp;Witaj,'.uzytkownik().'</span>
                        ';
                    }else{
                        echo"<a class='hp' href='login.php'>
                        <img class='image' src='images/account.svg' alt='account' />
                          <span class='s'>Zaloguj się</span>";
                    }
                    ?>
          </a>
         <a class="do" href="create-auction.php" >
         <img class="image1" src="images/add.svg" alt="addIcon" />
           <span class='s2'>Dodaj ogłoszenie</span></a>
       </div>
 
     </div>
    <div class="promotion">
        <img src="images/Vector.svg" alt="promotionimage">
    </div>
    
    <h1 class="ra">Świeże bułeczki</h1>
    
    <!-- oferty -->
    <?php
        @session_start();
        $baza = mysqli_connect('localhost', 'root', '', 'bambopl');
        if ($baza->connect_error) {
            die("Connection failed: " . $baza->connect_error);
        }

        if (isset($_POST['search-bar'])) {
            // Your search code here
        } elseif (!isset($_POST['search-bar'])) {
            $result = mysqli_query($baza, "SELECT * FROM auctions");
            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
                    // Include a link with the item ID in the URL
                    echo '
                    <div class="offers-home-page">
                        <a href="item_details.php?id=' . $row['id'] . '" class="offer">
                            <img class="ad-image" src="' . $row['photo'] . '" alt="zdjecie przedmiotu" />
                            <div class="ad-details">
                                <p class="offer-name">' . $row['title'] . '</p>
                                <p class="price">' . $row['price'] . 'zł</p>
                            </div>
                        </a>
                    </div>';
                }
            }
        }
        mysqli_close($baza);
    ?>
    
    <footer>
        <table>
            <tr>
                <td>Olsztyn Bałtycka 151</td>
                <td>Tel: 999 999 999</td>
                <td>Email: BamboPl@gmail.com</td>
            </tr>
        </table>
    </footer>
</body>
</html>
