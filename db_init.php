<?php
    require_once __DIR__ . '/source/config/create_db.php';
    require_once __DIR__ . '/source/config/connexion_db.php';
    require_once __DIR__ . '/source/model/PrSport.php';
    $bd=new Create_DateBase();
    $cnx=DatabaseConnection::getInstance()->getConnection();
    $creatTable=(new PrSport($cnx))->CreatTable();
?>