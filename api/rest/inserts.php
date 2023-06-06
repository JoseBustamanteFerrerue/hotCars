<?php

function postRegistro($dbConn, $data) {
    $password = $data->password;

    // Generar el hash de la contraseña
    $passwordEncriptada = password_hash($password, PASSWORD_DEFAULT);

    $sql = $dbConn->prepare("INSERT users (name, primerApellido, segundoApellido, fecha_nacimiento, email, telefono, password, rol)
     VALUES (:name, :primerApellido, :segundoApellido, :fecha_nacimiento, :email, :telefono, :password, 'user');");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':name', $data->name);
    $sql->bindValue(':primerApellido', $data->primerApellido);
    $sql->bindValue(':segundoApellido', $data->segundoApellido);
    $sql->bindValue(':fecha_nacimiento', $data->fecha_nacimiento);
    $sql->bindValue(':email', $data->email);
    $sql->bindValue(':telefono', $data->telefono);
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

function tasar ($dbConn, $data) {
    $sql = $dbConn->prepare("INSERT coches_tasados (idMark, idProvincia, email, telefono, name, primer_apellido, anyo, 
    km, matricula, estadoCoche, fecha_nacimiento, valor_tasado)
    VALUES (:idMark, :idProvincia, :email, :telefono, :name, :primer_apellido, :anyo, 
    :km, :matricula, :estadoCoche, :fecha_nacimiento, :valorTasado);");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idMark', $data->idMark);
    $sql->bindValue(':idProvincia', $data->idProvincia);
    $sql->bindValue(':email', $data->email);
    $sql->bindValue(':telefono', $data->telefono);
    $sql->bindValue(':name', $data->name);
    $sql->bindValue(':primer_apellido', $data->primer_apellido);
    $sql->bindValue(':anyo', $data->anyo);
    $sql->bindValue(':km', $data->km);
    $sql->bindValue(':matricula', $data->matricula);
    $sql->bindValue(':estadoCoche', $data->estadoCoche);
    $sql->bindValue(':fecha_nacimiento', $data->fecha_nacimiento);
    $sql->bindValue(':valorTasado', $data->valorTasado);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 201 Created");
    exit();
}

function editarCoche ($dbConn, $data) {
    $sql = $dbConn->prepare("UPDATE cars SET anyo = :anyo, km = :km, stateCar = :stateCar, price = :price, combustible = :combustible,
    caja_de_cambios = :caja_de_cambios, distintivo_ambiental = :distintivo_ambiental, peso = :peso, deposito = :deposito, 
    maletero = :maletero, medida_ancho = :medida_ancho, medida_altura = :medida_altura, medida_largo = :medida_largo, 
    carroceria = :carroceria, num_plazas = :num_plazas, bastidor = :bastidor, matricula = :matricula, extras = :extras, 
    estadoReserva = :estadoReserva WHERE id = :idCar;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':idCar', $data->idCar);
    $sql->bindValue(':anyo', $data->anyo);
    $sql->bindValue(':km', $data->km);
    $sql->bindValue(':stateCar', $data->stateCar);
    $sql->bindValue(':price', $data->price);
    $sql->bindValue(':combustible', $data->combustible);
    $sql->bindValue(':caja_de_cambios', $data->caja_de_cambios);
    $sql->bindValue(':distintivo_ambiental', $data->distintivo_ambiental);
    $sql->bindValue(':peso', $data->peso);
    $sql->bindValue(':deposito', $data->deposito);
    $sql->bindValue(':maletero', $data->maletero);
    $sql->bindValue(':medida_ancho', $data->medida_ancho);
    $sql->bindValue(':medida_altura', $data->medida_altura);
    $sql->bindValue(':medida_largo', $data->medida_largo);
    $sql->bindValue(':carroceria', $data->carroceria);
    $sql->bindValue(':num_plazas', $data->num_plazas);
    $sql->bindValue(':bastidor', $data->bastidor);
    $sql->bindValue(':matricula', $data->matricula);
    $sql->bindValue(':extras', $data->extras);
    $sql->bindValue(':estadoReserva', $data->estadoReserva);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    exit();
}

function subirFotoCoche ($dbConn) {
    if (isset($_FILES['imagen'])) {
        $imagen = $_FILES['imagen'];
        $idCar = $_POST['idCar'];
    
        // Obtener el nombre y la extensión del archivo
        $nombreArchivo = $imagen['name'];
        $extension = pathinfo($nombreArchivo, PATHINFO_EXTENSION);
    
        // Directorio donde se guardará la imagen
        $directorio = 'carsImgs/' . $idCar . '/';
    
        // Verificar si el directorio existe, si no, crearlo
        if (!file_exists($directorio)) {
          mkdir($directorio, 0777, true);
        }
    
        // Generar un nombre único para la imagen
        $nombreUnico = uniqid() . '.' . $extension;
    
        // Ruta completa donde se guardará la imagen
        $rutaImagen = $directorio . $nombreUnico;
    
        // Mover el archivo al directorio de destino
        if (move_uploaded_file($imagen['tmp_name'], $rutaImagen)) {
          // Aquí puedes realizar otras operaciones, como guardar la ruta en la base de datos
            guardarRuta($dbConn, $rutaImagen);
          // Enviar una respuesta al cliente
          $response = ['message' => 'Imagen subida correctamente'];
          echo json_encode($response);
        } else {
          // Ocurrió un error al mover el archivo
          $response = ['error' => 'Error al subir la imagen'];
          echo json_encode($response);
        }
      } else {
        // No se encontró la imagen en la solicitud
        $response = ['error' => 'No se proporcionó ninguna imagen'];
        echo json_encode($response);
      }
}

function guardarRuta($dbConn, $rutaImagen) {
    try {
      $sql = $dbConn->prepare("INSERT INTO rutas_imgs (idCar, ruta) VALUES (:idCar, :rutaImagen)");
      $sql->bindParam(':idCar', $_POST['idCar']);
      $sql->bindParam(':rutaImagen', $rutaImagen);
      $sql->execute();
  
      $response = ['message' => 'Ruta guardada correctamente'];
      echo json_encode($response);
    } catch (PDOException $e) {
      $response = ['error' => 'Error al guardar la ruta: ' . $e->getMessage()];
      echo json_encode($response);
    }
    exit();
  }
  