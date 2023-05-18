<?php
include "config.php";
include "utils.php";
include "filters.php";

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

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
    default:
    filters($dbConn);
    break;
  }
}

// Crear un nuevo post
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $input = $_POST;
    $sql = "INSERT INTO posts
          (title, status, content, user_id)
          VALUES
          (:title, :status, :content, :user_id)";
    $statement = $dbConn->prepare($sql);
    bindAllValues($statement, $input);
    $statement->execute();
    $postId = $dbConn->lastInsertId();
    if($postId)
    {
      $input['id'] = $postId;
      header("HTTP/1.1 200 OK");
      echo json_encode($input);
      exit();
	 }
}

//Borrar
if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
	$id = $_GET['id'];
  $statement = $dbConn->prepare("DELETE FROM posts where id=:id");
  $statement->bindValue(':id', $id);
  $statement->execute();
	header("HTTP/1.1 200 OK");
	exit();
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