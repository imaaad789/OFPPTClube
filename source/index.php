<?php
    require_once __DIR__.'/../db_init.php';
    require_once __DIR__.'/config/connexion_db.php';
    require_once __DIR__.'/model/PrSport.php';

    $cnx=DatabaseConnection::getInstance()->getConnection();
    $CreactDataBase=new Create_DateBase();
    $para=(new PrSport($cnx))->getAdherents();
    
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Commandes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .container {
            margin-top: 30px;
        }
        .table {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .table th {
            background-color: #007bff;
            color: white;
        }
        .table td, .table th {
            vertical-align: middle;
            text-align: center;
        }
        .btn-action {
            margin: 0 5px;
        }
        .btn-add {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="text-center mb-4">Système de gestion des adhérents</h2>
        <div class="text-start mb-3">
            <a href="view/ajout.php" class="btn btn-success btn-add">
                <i class="bi bi-plus-circle me-2"></i>Ajouter
            </a>
        </div>
        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>CIN</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Sport</th>
                    <th>cotisation</th>
                    <th>date_inscription</th>
                    <th>date_creation</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if (is_array($para) && count($para)>0) {
                    foreach ($para as $value) {
                        ?>
                        <tr>
                            <td><?= htmlspecialchars($value['CIN']) ?></td>
                            <td><?= htmlspecialchars($value['nom']) ?></td>
                            <td><?= htmlspecialchars($value['prenom']) ?></td>
                            <td><?= htmlspecialchars($value['sport']) ?></td>
                            <td><?= htmlspecialchars($value['cotisation']) ?></td>
                            <td><?= htmlspecialchars($value['date_inscription']) ?></td>
                            <td><?= htmlspecialchars($value['date_creation']) ?></td>
                            
                            <td>
                                <a href="view/update.php?CIN=<?=$value['CIN']?>" class="btn btn-primary btn-sm btn-action">
                                    <i class="bi bi-pencil me-1"></i>Modifier
                                </a>
                                <a href="view/delet.php?CIN=<?=$value['CIN']?>" class="btn btn-danger btn-sm btn-action">
                                    <i class="bi bi-trash me-1"></i>Supprimer
                                </a>
                            </td>
                        </tr>
                        <?php
                    }
                } else {
                    ?>
                    <tr>
                        <td colspan="12" class="text-center">Aucune commande trouvée.</td>
                    </tr>
                    <?php
                }
                ?>
            </tbody>
        </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.js"></script>
</body>
</html>