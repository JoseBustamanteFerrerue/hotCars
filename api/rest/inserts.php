<?php

function postRegistro($dbConn, $data) {
    $sql = $dbConn->prepare("INSERT users (name, primerApellido, segundoApellido, fecha_nacimiento, email, password, rol)
     VALUES (:name, :primerApellido, :segundoApellido, :fecha_nacimiento, :email, :password, 'user');");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':name', $data->name);
    $sql->bindValue(':primerApellido', $data->primerApellido);
    $sql->bindValue(':segundoApellido', $data->segundoApellido);
    $sql->bindValue(':fecha_nacimiento', $data->fecha_nacimiento);
    $sql->bindValue(':email', $data->email);
    $sql->bindValue(':password', $data->password);
    $sql->execute();
    $postId = $dbConn->lastInsertId();
    $input['id'] = $postId;
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($input);
    exit();
}