<?php
session_start();
     $_SESSION["user_id"] = 1;
     $_SESSION["user_name"]="juan23";
     header("Location: http://localhost:3000/WebPizzeria/index.php?c=pedidos&a=index");
?>