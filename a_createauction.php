<?php
$db = mysqli_connect('localhost','root','','bambopl');

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

$table_name = "auctions";

$uploadedFile = $_FILES["photo"];
$title = $_POST["title"];
$price = $_POST["price"];
$description = $_POST["description"];
$sold_by = $_POST["sold_by"];

$targetDirectory = "auction_photos/";
$targetFile = $targetDirectory . basename($uploadedFile["name"]);

if (move_uploaded_file($uploadedFile["tmp_name"], $targetFile)) {
    $sql = "INSERT INTO $table_name (title, photo, price, description, sold_by) VALUES ('$title', '$targetFile', $price, '$description', '$sold_by')";

    if ($db->query($sql) === TRUE) {
        echo "<script>alert('Dodano ogłoszenie.')</script>";
    } else {
        echo "<script>alert('Error creating auction: " . $db->error . "')</script>";
    }
} else {
    echo "<script>alert('Error uploading photo.')</script>";
}

$db->close();
error_reporting(E_ALL ^ E_WARNING);
?>

?>
<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bambo</title>
    <link rel="shortcut icon" href="graphics/logodropout.jpg">
    <meta http-equiv="refresh" content="0.1; url=index.php">
</head>
<body>

</body>
</html>