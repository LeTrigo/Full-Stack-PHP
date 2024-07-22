<?php
include("conexion.php");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $telefono = $_POST["telefono"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];
}

echo("Formulario enviado con exito!");