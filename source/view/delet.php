<?php
require_once __DIR__.'/../model/PrSport.php';
require_once __DIR__.'/../config/connexion_db.php';
$cnx=DatabaseConnection::getInstance()->getConnection();

if (!isset($_GET['CIN']) || empty($_GET['CIN'])) {
    echo "<script>
            alert('CIN non fourni !');
            window.location.href = '../index.php';
        </script>";
    exit();
}

if (isset($_GET['CIN'])) {
    $cin = $_GET['CIN'];
    $SuppAdh=(new PrSport($cnx))->deleteAdherents($cin);
    
    if($SuppAdh){
        echo "<script>
                alert('L\\'adhérent a été supprime avec succès !');
                window.location.href = '../index.php';
            </script>";
    }
    
    
}
?>
