<?php
session_start();
     $_SESSION["usuario"]["1"]["rol"]= "cliente";
     $_SESSION["usuario"]["1"]["name"]= "juanito";

     header("Location: http://localhost:3000/WebPizzeria/index.php?c=pedidos&a=index");
?>