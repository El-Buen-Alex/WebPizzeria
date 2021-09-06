<?php
    session_start();
    $sessionExists=false;
    if(isset($_SESSION["user_id"]) && isset($_SESSION["user_name"])){
        $sessionExists=true;
    }
    echo $sessionExists;
?>