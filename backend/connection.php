<?php
    $host = "localhost";
    $username = "root";
    $password = null;
    $dbName = "newsdb";

    $conn = mysqli_connect($host, $username, $password, $dbName);

	if(!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
?>