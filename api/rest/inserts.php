<?php

function postRegistro($dbConn, $data) {
    $password = $data->password;

    // Generar el hash de la contraseña
    $passwordEncriptada = password_hash($password, PASSWORD_DEFAULT);

    $sql = $dbConn->prepare("INSERT users (name, primerApellido, segundoApellido, fecha_nacimiento, email, password, rol)
     VALUES (:name, :primerApellido, :segundoApellido, :fecha_nacimiento, :email, :password, 'user');");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':name', $data->name);
    $sql->bindValue(':primerApellido', $data->primerApellido);
    $sql->bindValue(':segundoApellido', $data->segundoApellido);
    $sql->bindValue(':fecha_nacimiento', $data->fecha_nacimiento);
    $sql->bindValue(':email', $data->email);
    $sql->bindValue(':password', $passwordEncriptada);
    $sql->execute();
    $postId = $dbConn->lastInsertId();
    $input['id'] = $postId;
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($input);
    exit();
}

function login($dbConn, $data) {
    $sql = $dbConn->prepare("SELECT id as id, password, rol FROM users WHERE email = :email;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':email', $data->email);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    $result = $sql->fetchAll();

    foreach ($result as $value) {
        if ($value['id'] && password_verify($data->password, $value['password'])) {
            header("HTTP/1.1 200 OK");
            echo json_encode($result);
            
        } else {
            header("HTTP/1.1 401 Unauthorized");
        }
    }  
    exit();
}

function comprobarSesion ($data) {
    // Verificar el estado de inicio de sesión en PHP
    session_start();

    if (isset($_SESSION['usuario']) &&  $_SESSION['usuario'] == $data->email) {
    // El usuario ha iniciado sesión
    $response = array('autenticado' => true, 'usuario' => $_SESSION['usuario']);
    } else {
    // El usuario no ha iniciado sesión
    $response = array('autenticado' => false);
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}

function comprobarEmail($dbConn, $data) {
    $sql = $dbConn->prepare("SELECT COUNT(*) as count FROM users WHERE email = :email");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':email', $data->email);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    $result = $sql->fetchAll();
    header("HTTP/1.1 200 OK");
    echo json_encode($result);
    exit(); 
}

function consulta($dbConn, $data) {
    $sql = $dbConn->prepare("INSERT consultas (idUser, motivo, fecha_consulta)
     VALUES (:idUser, :motivo, NOW());");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idUser', $data->idUser);
    $sql->bindValue(':motivo', $data->message);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    exit();
}

function anyadirFavorito ($dbConn, $data) {
    $sql = $dbConn->prepare("INSERT favoritos (idUser, idCar)
     VALUES (:idUser, :idCar);");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idUser', $data->idUser);
    $sql->bindValue(':idCar', $data->idCar);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    exit();
}

function reservar ($dbConn, $data) {
    $sql = $dbConn->prepare("INSERT reservas (idUser, idCar, fecha_reserva)
    VALUES (:idUser, :idCar, NOW());");
   // Realizar la preparación de la consulta a la base de datos
   $sql->bindValue(':idUser', $data->idUser);
   $sql->bindValue(':idCar', $data->idCar);
   $sql->execute();
   $sql->setFetchMode(PDO::FETCH_ASSOC);
   header("HTTP/1.1 200 OK");

   // Actualizar estado del coche
   $sql = $dbConn->prepare("UPDATE cars SET estadoReserva = 1 WHERE id = :idCar;");
   // Realizar la preparación de la consulta a la base de datos
   $sql->bindValue(':idCar', $data->idCar);
   $sql->execute();
   $sql->setFetchMode(PDO::FETCH_ASSOC);
   header("HTTP/1.1 200 OK");
   exit();
}