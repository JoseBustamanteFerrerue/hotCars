<?php
function deleteFavorito($dbConn) {
    $sql = $dbConn->prepare("DELETE FROM favoritos WHERE idUser = :idUser AND idCar = :idCar;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idUser', $_GET['idUser']);
    $sql->bindValue(':idCar', $_GET['idCar']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    exit();
}

