<?php

function getAll($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT cars.id, mark.nameMark, mark.nameModel, mark.nameVersion, mark.cv, mark.cilindrada, cars.carName, 
    cars.matricula, cars.km, cars.price, cars.stateCar, cars.anyo, cars.combustible, cars.distintivo_ambiental, cars.carroceria, cars.num_plazas, 
    cars.caja_de_cambios, cars.medida_largo, cars.medida_ancho, cars.medida_altura, cars.peso, cars.deposito, cars.maletero, cars.idConcesionario,
    concesionarios.name, concesionarios.localizacion, concesionarios.localizacionLink, cars.estadoReserva, cars.bastidor, cars.extras, 
    GROUP_CONCAT(ri.ruta SEPARATOR '|') AS rutas 
    FROM cars
    INNER JOIN mark ON cars.carName = mark.id
    INNER JOIN concesionarios ON cars.idConcesionario = concesionarios.id
    LEFT JOIN rutas_imgs AS ri ON ri.idCar = cars.id
    GROUP BY cars.id;");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getAllLimit4($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT  cars.id ,mark.nameMark, mark.nameModel, mark.nameVersion, mark.cv, mark.cilindrada, cars.carName, 
    cars.matricula, cars.km, cars.price, cars.stateCar, cars.anyo, cars.combustible, cars.distintivo_ambiental, cars.carroceria, cars.num_plazas, 
    cars.caja_de_cambios, cars.medida_largo, cars.medida_ancho, cars.medida_altura, cars.peso, cars.deposito, cars.maletero, cars.idConcesionario,
    concesionarios.name, concesionarios.localizacion, concesionarios.localizacionLink, cars.estadoReserva, cars.bastidor, cars.extras, GROUP_CONCAT(ri.ruta SEPARATOR '|') AS rutas
    FROM cars INNER JOIN mark ON cars.carName = mark.id INNER JOIN concesionarios ON cars.idConcesionario = concesionarios.id 
    LEFT JOIN rutas_imgs AS ri ON ri.idCar = cars.id
    GROUP BY cars.id limit 0,4;");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getFavorites($dbConn)
{
    $sql = $dbConn->prepare("SELECT idCar FROM favoritos INNER JOIN users ON favoritos.idUser = users.id WHERE favoritos.idUser = :id;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':id', $_GET['favoritos']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getFavoritesAndCars($dbConn)
{
    $sql = $dbConn->prepare("SELECT cars.id ,mark.nameMark, mark.nameModel, mark.nameVersion, mark.cv, mark.cilindrada, cars.carName, 
    cars.matricula, cars.km, cars.price, cars.stateCar, cars.anyo, cars.combustible, cars.distintivo_ambiental, cars.carroceria, cars.num_plazas, 
    cars.caja_de_cambios, cars.medida_largo, cars.medida_ancho, cars.medida_altura, cars.peso, cars.deposito, cars.maletero, cars.idConcesionario,
    concesionarios.name, concesionarios.localizacion, concesionarios.localizacionLink, cars.estadoReserva, cars.bastidor, cars.extras, 
    GROUP_CONCAT(ri.ruta SEPARATOR '|') AS rutas
    FROM cars INNER JOIN mark ON cars.carName = mark.id INNER JOIN concesionarios ON cars.idConcesionario = concesionarios.id
    INNER JOIN favoritos ON favoritos.idCar = cars.id LEFT JOIN rutas_imgs AS ri ON ri.idCar = cars.id
    WHERE favoritos.idUser = :id
    GROUP BY cars.id;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':id', $_GET['favoritosAndCars']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getCitas($dbConn)
{
    $sql = $dbConn->prepare("SELECT cars.id, mark.nameMark, mark.nameModel, mark.nameVersion, fecha_cita, motivo, name, primerApellido
    FROM cita INNER JOIN users ON cita.idUser = users.id INNER JOIN cars ON cita.idCar = cars.id INNER JOIN mark ON cars.carName = mark.id
    WHERE cita.idUser = :id;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->bindValue(':id', $_GET['citas']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getConcesionarios($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT name, localizacion, localizacionLink FROM concesionarios;");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getConsultas($dbConn)
{
    $sql = $dbConn->prepare("SELECT consultas.id, name, primerApellido, segundoApellido, fecha_nacimiento, email, telefono, motivo, fecha_consulta
    FROM consultas INNER JOIN users ON consultas.idUser = users.id;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getCocheTasado($dbConn)
{
    $sql = $dbConn->prepare("SELECT ct.id, name, primer_apellido, fecha_nacimiento, email, anyo, km, matricula, estadoCoche,
    nameMark, nameModel, nameVersion, cv, cilindrada, valor, provincia, valor_tasado, telefono
    FROM coches_tasados AS ct INNER JOIN mark ON ct.idMark = mark.id INNER JOIN provincias ON ct.idProvincia = provincias.id;");
    // Realizar la preparación de la consulta a la base de datos
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getCarPorId($dbConn)
{
    $sql = $dbConn->prepare("SELECT  cars.id ,mark.nameMark, mark.nameModel, mark.nameVersion, mark.cv, mark.cilindrada, cars.carName, 
    cars.matricula, cars.km, cars.price, cars.stateCar, cars.anyo, cars.combustible, cars.distintivo_ambiental, cars.carroceria, cars.num_plazas, 
    cars.caja_de_cambios, cars.medida_largo, cars.medida_ancho, cars.medida_altura, cars.peso, cars.deposito, cars.maletero, cars.idConcesionario,
    concesionarios.name, concesionarios.localizacion, concesionarios.localizacionLink, cars.estadoReserva, cars.bastidor, cars.extras, GROUP_CONCAT(ri.ruta SEPARATOR '|') AS rutas
    FROM cars INNER JOIN mark ON cars.carName = mark.id INNER JOIN concesionarios ON cars.idConcesionario = concesionarios.id
    LEFT JOIN rutas_imgs AS ri ON ri.idCar = cars.id
    WHERE cars.id = :id;
    GROUP BY cars.id");
    $sql->bindValue(':id', $_GET['carPorId']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getMarcaId($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT id, valor FROM mark WHERE nameMark = :nameMark AND nameModel = :nameModel AND nameVersion = :nameVersion;");
    $sql->bindValue(':nameMark', $_GET['nameMark']);
    $sql->bindValue(':nameModel', $_GET['nameModel']);
    $sql->bindValue(':nameVersion', $_GET['nameVersion']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getProvinciaId($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT id FROM provincias WHERE provincia = :provincia;");
    $sql->bindValue(':provincia', $_GET['provincia']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function getReservas($dbConn) {
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT reservas.id as idReservas, u.name as nombreUsuario, u.primerApellido, u.segundoApellido, u.fecha_nacimiento, u.email, u.telefono,
    reservas.fecha_reserva, cars.id as idCar, nameMark, nameModel, nameVersion, cv, anyo, km, stateCar, price, combustible, caja_de_cambios, distintivo_ambiental,
    peso, deposito, maletero, medida_ancho, medida_altura, medida_largo, carroceria, num_plazas, extras, concesionarios.name as nombreConcesionario
    FROM reservas 
    INNER JOIN users AS u ON reservas.idUser = u.id 
    INNER JOIN cars ON cars.id = reservas.idCar
    INNER JOIN mark ON cars.carName = mark.id
    INNER JOIN concesionarios ON cars.idConcesionario = concesionarios.id;");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function filters($dbConn)
{
    $carName = 'mark.nameMark';
    $nameModel = 'mark.nameModel';
    $nameVersion = 'mark.nameVersion';
    $km = 'cars.km';
    $price = 'cars.price';
    $stateCar = 'cars.stateCar';
    $anyo = 'cars.anyo';
    $combustible = 'cars.combustible';
    $caja = 'cars.caja_de_cambios';
    $consulta = '';
    $gets = number_format(count($_GET));
    $i = 1;
    $hayVarios = '&&';

    // Preparar filtros para clausula where
    foreach ($_GET as $key => $value) {
        if ($gets == $i) {
            $hayVarios = '';
        }
        switch ($key) {
            case $key == 'carName':
                $consulta .= $carName . "=" . ":$key" . $hayVarios;
                break;
            case $key == 'nameModel':
                $consulta .= $nameModel . "=" . ":$key" . $hayVarios;
                break;
            case $key == 'nameVersion':
                $consulta .= $nameVersion . "=" . ":$key" . $hayVarios;
                break;
            case $key == 'km':
                $consulta .= $km . "<=" . ":$key" . $hayVarios;
                break;
            case $key == 'price':
                $consulta .= $price . "<=" . ":$key" . $hayVarios;
                break;
            case $key == 'stateCar':
                $consulta .= $stateCar . "=" . ":$key" . $hayVarios;
                break;
            case $key == 'anyo':
                $consulta .= $anyo . "=" . ":$key" . $hayVarios;
                break;
            case $key == 'combustible':
                $consulta .= $combustible . "=" . ":$key" . $hayVarios;
                break;
            case $key == 'caja':
                $consulta .= $caja . "=" . ":$key" . $hayVarios;
                break;

        }
        $i++;
    }
    $sql = $dbConn->prepare("SELECT  cars.id ,mark.nameMark, mark.nameModel, mark.nameVersion, mark.cv, mark.cilindrada, cars.carName, 
    cars.matricula, cars.km, cars.price, cars.stateCar, cars.anyo, cars.combustible, cars.distintivo_ambiental, cars.carroceria, cars.num_plazas, 
    cars.caja_de_cambios, cars.medida_largo, cars.medida_ancho, cars.medida_altura, cars.peso, cars.deposito, cars.maletero, cars.idConcesionario,
    concesionarios.name, concesionarios.localizacion, cars.estadoReserva, cars.bastidor, cars.extras, GROUP_CONCAT(ri.ruta SEPARATOR '|') AS rutas
    FROM cars INNER JOIN mark ON cars.carName = mark.id INNER JOIN concesionarios ON cars.idConcesionario = concesionarios.id
    LEFT JOIN rutas_imgs AS ri ON ri.idCar = cars.id
    WHERE " . $consulta . " 
    GROUP BY cars.id;");
    // Realizar la preparación de la consulta a la base de datos
    foreach ($_GET as $key => $value) {
        $sql->bindValue(':' . $key, $value);
    }
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function desplegableMarcas($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT nameMark FROM mark;");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function desplegableModelo($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT mark.nameModel FROM cars INNER JOIN mark ON cars.carName = mark.id WHERE mark.nameMark = :nameMark;");
    $sql->bindValue(':nameMark', $_GET['nameMark']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function desplegableVersion($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT id, nameVersion, cv FROM mark WHERE nameMark = :nameMark AND nameModel = :nameModel;");
    $sql->bindValue(':nameMark', $_GET['nameMark']);
    $sql->bindValue(':nameModel', $_GET['nameModel']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function desplegableCombustible($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT combustible FROM cars");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function desplegableCarroceria($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT carroceria FROM cars");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function desplegableProvincias($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT provincia FROM provincias");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}

function num_plazas($dbConn)
{
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT combustible FROM cars");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit();
}
?>