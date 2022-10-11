<?php

$db_hostname = 'localhost';
$db_username = '87601';
$db_password = 'x2t2gAK6!2004';
$db_database = 'schoenen_db';

$mysqli = mysqli_connect($db_hostname, $db_username, $db_password, $db_database);

if (!$mysqli){
    echo "FOUT: geen connectie naar database. <br/>";
    echo "Error: " . mysqlite_connect_error() . "<br/>";
    exit;
}

else{
    echo "Verbinding met " . $db_database . " is gemaakt!<br/>";
}

?>
