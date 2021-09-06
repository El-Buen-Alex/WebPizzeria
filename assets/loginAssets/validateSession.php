<?php
    session_start();
    $sessionRol="0";
    if(isset($_SESSION["usuario"])){
        $sessionRol=$_SESSION["usuario"]["1"]["rol"];
    }
    echo $sessionRol;
?>