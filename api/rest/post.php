<?php
include "config.php";
include "utils.php";
include "filters.php";
include "inserts.php";
include "deletes.php";


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Las solicitudes OPTIONS se utilizan para verificar si el servidor permite la solicitud CORS
  header('Access-Control-Allow-Origin: http://localhost:4200');
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  header('HTTP/1.1 200 OK');
  exit;
}

$dbConn =  connect($db);

// Recibir datos
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  $a = 'hola';
  switch ($a) {
    case number_format(count($_GET)) == 0: 
      getAll ($dbConn);
      break;
    case isset($_GET["desplegableMarcas"]):
      desplegableMarcas($dbConn);
      break;
    case isset($_GET["desplegableModelo"]):
      desplegableModelo($dbConn);
      break;
    case isset($_GET["limit"]):
      getAllLimit4($dbConn);
      break; 
    case isset($_GET["combustibles"]):
      desplegableCombustible($dbConn);
      break; 
    case isset($_GET["desplegableCarroceria"]):
      desplegableCarroceria ($dbConn);
      break;
    case isset($_GET["limit"]):
      getAllLimit4 ($dbConn);
      break; 
    case isset($_GET["num_plazas"]):
      num_plazas ($dbConn);
      break; 
    case isset($_GET['favoritos']):
      getFavorites($dbConn);
      break;
    case isset($_GET['favoritosAndCars']):
      getFavoritesAndCars($dbConn);
    case isset($_GET['concesionarios']):
      getConcesionarios($dbConn);
    case isset($_GET['citas']):
      getCitas($dbConn);
    case isset($_GET['consultas']):
      getConsultas($dbConn);
    case isset($_GET['carPorId']):
      getCarPorId($dbConn);
    case isset($_GET['desplegableProvincia']):
      desplegableProvincias($dbConn);
    case isset($_GET['desplegableVersion']):
      desplegableVersion($dbConn);
    case isset($_GET['marcaId']):
      getMarcaId($dbConn);
    case isset($_GET['provinciaId']):
      getProvinciaId($dbConn);
    case isset($_GET['coche_tasado']):
      getCocheTasado($dbConn);
    default:
      filters($dbConn);
    break;
  }
}

// Crear un nuevo post
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $requestUri = $_SERVER['REQUEST_URI'];
  $jsonData = file_get_contents('php://input');
  $data = json_decode($jsonData); 

  if ($requestUri === '/rest/post.php/registro') {
    postRegistro($dbConn, $data);
  }

  if ($requestUri === '/rest/post.php/login') {
    login($dbConn, $data);
  }

  if ($requestUri === '/rest/post.php/comprobarEmail') {
    comprobarEmail($dbConn, $data);
  }

  if ($requestUri === '/rest/post.php/consulta') {
    consulta($dbConn, $data);
  }

  if ($requestUri === '/rest/post.php/anyadirFavorito') {
    anyadirFavorito($dbConn, $data);
  }

  if ($requestUri === '/rest/post.php/reservar') {
    reservar($dbConn, $data);
  }

  if ($requestUri === '/rest/post.php/tasar') {
    tasar($dbConn, $data);
  }

  if ($requestUri === '/rest/post.php/editarCoche') {
    editarCoche($dbConn, $data);
  }

  if ($requestUri === '/rest/post.php/subirFoto') {
    subirFotoCoche($dbConn);
  }

}

//Borrar
if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{

  if (isset($_GET['favorito'])) {
    deleteFavorito($dbConn);
  }

  if (isset($_GET['coche'])) {
    deleteCoche($dbConn);
  }

  if (isset($_GET['coche_tasado'])) {
    deleteCocheTasado($dbConn);
  }

  if (isset($_GET['consultas'])) {
    deleteConsulta($dbConn);
  }
}

//Actualizar
if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    $input = $_GET;
    $postId = $input['id'];
    $fields = getParams($input);

    $sql = "
          UPDATE posts
          SET $fields
          WHERE id='$postId'
           ";

    $statement = $dbConn->prepare($sql);
    bindAllValues($statement, $input);

    $statement->execute();
    header("HTTP/1.1 200 OK");
    exit();
}


//En caso de que ninguna de las opciones anteriores se haya ejecutado
header("HTTP/1.1 400 Bad Request");
?>