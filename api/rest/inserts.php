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
    $sql = $dbConn->prepare("SELECT id as id, password FROM users WHERE email = :email;");
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