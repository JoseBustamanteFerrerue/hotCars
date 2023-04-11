<?php

function getAll ($dbConn) {
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT  mark.nameMark, mark.nameModel, mark.nameVersion, cars.img, cars.carName, cars.matricula, cars.km, cars.price, 
    cars.stateCar, cars.anyo, cars.combustible, cars.distintivo_ambiental, cars.carroceria, cars.num_plazas, cars.caja_de_cambios FROM cars INNER JOIN mark ON cars.carName = mark.id;");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll());
    exit();
}

function getAllLimit4 ($dbConn) {
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT  mark.nameMark, mark.nameModel, mark.nameVersion, cars.img, cars.carName, cars.matricula, cars.km, cars.price, 
    cars.stateCar, cars.anyo, cars.combustible, cars.distintivo_ambiental, cars.carroceria, cars.num_plazas, cars.caja_de_cambios FROM cars INNER JOIN mark ON cars.carName = mark.id limit 0,3;");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll());
    exit();
}


function conseguirPorNombres ($dbConn) {
    $carName = 'mark.nameMark';
    $nameModel = 'mark.nameModel';
    $nameVersion = 'mark.nameVersion';
    $km = 'cars.km';
    $price = 'cars.price';
    $stateCar = 'cars.stateCar';
    $anyo = 'cars.anyo';
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
                $consulta .= $carName."=".":$key" . $hayVarios;
                break;
            case $key == 'nameModel':               
                $consulta .= $nameModel."=".":$key" . $hayVarios;
                break;
            case $key == 'nameVersion':               
                $consulta .= $nameVersion."=".":$key" . $hayVarios;
                break;
            case $key == 'km':               
                $consulta .= $km."<=".":$key" . $hayVarios;
                break;
            case $key == 'price':               
                $consulta .= $price."<=".":$key" . $hayVarios;
                break;
            case $key == 'stateCar':               
                $consulta .= $stateCar."=".":$key" . $hayVarios;
                break;
            case $key == 'anyo':               
                $consulta .= $anyo."=".":$key" . $hayVarios;
                break;
        }
        $i++;
    }
    $sql = $dbConn->prepare("SELECT  mark.nameMark, mark.nameModel, mark.nameVersion, cars.img, cars.carName, cars.matricula, cars.km, cars.price, 
    cars.stateCar, cars.anyo, cars.combustible, cars.distintivo_ambiental, cars.carroceria, cars.num_plazas, cars.caja_de_cambios FROM cars INNER JOIN mark ON cars.carName = mark.id WHERE ". $consulta.";");
    // Realizar la preparación de la consulta a la base de datos
    foreach ($_GET as $key => $value) {
        $sql->bindValue(':'.$key, $value);
    }
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode(  $sql->fetchAll()  );
    exit();
  }

  function desplegableMarcas ($dbConn) {
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT nameMark FROM mark;");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll());
    exit();
}

function desplegableModelo ($dbConn) {
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT mark.nameModel FROM cars INNER JOIN mark ON cars.carName = mark.id WHERE mark.nameMark = :nameMark;");
    $sql->bindValue(':nameMark', $_GET['nameMark']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll());
    exit();
}
?>