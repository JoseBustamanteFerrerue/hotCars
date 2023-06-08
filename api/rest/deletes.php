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

function deleteCoche($dbConn) {
    $sql = $dbConn->prepare("DELETE FROM cars WHERE id = :idCar;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idCar', $_GET['idCar']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    exit();
}

function deleteCocheTasado($dbConn) {
    $sql = $dbConn->prepare("DELETE FROM coches_tasados WHERE id = :idTasado;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idTasado', $_GET['idTasado']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    exit();
}

function deleteConsulta($dbConn) {
    $sql = $dbConn->prepare("DELETE FROM consultas WHERE id = :idConsulta;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idConsulta', $_GET['idConsulta']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    exit();
}

function deleteReserva($dbConn) {
    $sql = $dbConn->prepare("DELETE FROM reservas WHERE id = :idReservas;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idReservas', $_GET['idReservas']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    
    $sql = $dbConn->prepare("UPDATE cars SET estadoReserva = 0 WHERE id = :idCar;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idCar', $_GET['idCar']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    exit();
}