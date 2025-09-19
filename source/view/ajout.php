<?php
    if($_SERVER['REQUEST_METHOD']==='POST'){
        require_once __DIR__.'/../model/PrSport.php';
        require_once __DIR__.'/../config/connexion_db.php';

        $cnx=DatabaseConnection::getInstance()->getConnection();
        $Ajdb=new PrSport($cnx);

        $cin = trim($_POST['cin']);
        $nom = trim($_POST['nom']);
        $prenom = trim($_POST['prenom']);
        $sport = trim($_POST['sport']);
        $cotisation = floatval($_POST['cotisation']);
        $dateInscription=$_POST['dateInscription'];

        $res=$Ajdb->AjoutAdherent($cin,$nom,$prenom,$sport,$cotisation,$dateInscription);
        if($res){
            echo "<script>
                    alert('L\\'adhérent a été ajouté avec succès !');
                    window.location.href = '../index.php';
                </script>";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }

        .tab-content {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 1.8rem;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 8px;
            color: #34495e;
        }

        input, select {
            width: 100%;
            padding: 10px;
            border: 1px solid #dcdcdc;
            border-radius: 5px;
            font-size: 1rem;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        input:focus, select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
        }

        input[readonly] {
            background-color: #f9f9f9;
            cursor: not-allowed;
        }

        .btn {
            display: inline-block;
            padding: 12px 20px;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-right: 10px;
            text-decoration: none;
        }

        .btn:hover {
            background-color: #2980b9;
        }

        .btn-secondary {
            background-color: #7f8c8d;
        }

        .btn-secondary:hover {
            background-color: #6c7a89;
        }
        .btn-cancel {
            background-color: #e74c3c;
       }

        .btn-cancel:hover {
            background-color: #c0392b;
        }
    </style>
</head>
<body>
    <div id="ajouter" class="tab-content">
        <h2>Ajouter un Nouvel Adhérent</h2>
        <div class="form-section">
            <form id="memberForm" method="post">
                <div class="form-group">
                    <label for="cin">CIN *</label>
                    <input type="text" id="cin" name="cin" required placeholder="votre CIN">
                </div>
                <div class="form-group">
                    <label for="nom">Nom *</label>
                    <input type="text" id="nom" name="nom" required placeholder="Nom de famille">
                </div>
                <div class="form-group">
                    <label for="prenom">Prénom *</label>
                    <input type="text" id="prenom" name="prenom" required placeholder="Prénom">
                </div>
                <div class="form-group">
                    <label for="sport">Sport Pratiqué *</label>
                    <select id="sport" name="sport" required>
                        <option value="">Sélectionner un sport</option>
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Natation">Natation</option>
                        <option value="Volleyball">Volleyball</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Gymnastique">Gymnastique</option>
                        <option value="Athlétisme">Athlétisme</option>
                        <option value="Judo">Judo</option>
                        <option value="Boxe">Boxe</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="cotisation">Cotisation Annuelle (€) *</label>
                    <input type="number" id="cotisation" name="cotisation" readonly>
                </div>
                <div class="form-group">
                    <label for="dateInscription">Date d'Inscription</label>
                    <input type="date" id="dateInscription" name="dateInscription">
                </div>
                <button type="submit" class="btn">Enregistrer l'Adhérent</button>
                <button type="button" class="btn btn-secondary" onclick="resetForm()">Réinitialiser</button>
                <a href="../index.php" class="btn btn-cancel">Annuler</a>
            </form>
        </div>
    </div>
</body>
<script>

    const ListSport = [
        { sport:"Football",prix: 260 },
        { sport:"Basketball",prix: 220 },
        { sport:"Tennis",prix: 350 },
        { sport:"Natation",prix: 350 },  
        { sport:"Volleyball",prix: 320 },
        { sport:"Badminton",prix: 300 },
        { sport:"Gymnastique",prix: 250 },
        { sport:"Athlétisme",prix: 290 },
        { sport:"Judo",prix: 260 },
        { sport:"Boxe",prix: 260 }
    ];

    function cotisation() {
        let selectSport=document.getElementById('sport').value;
        let inCotisation=document.getElementById('cotisation');

        let sportTrouve=ListSport.find(item =>item.sport===selectSport);

        if (sportTrouve) {
            inCotisation.value=sportTrouve.prix;
        } else {
            inCotisation.value="";
        }
    }

    document.getElementById("sport").addEventListener('change',cotisation);
    function resetForm() {
        document.getElementById("memberForm").reset();
        document.getElementById("cotisation").value ="";
    }
</script>
</html>