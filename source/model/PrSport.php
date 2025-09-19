<?php

    class PrSport{
        private $conn;
        public function __construct($conn) {
            $this->conn=$conn;
            $this->CreatTable();
        }

        public function CreatTable(){
            try{
                $sql="CREATE TABLE adherents (
                    CIN VARCHAR(20) NOT NULL PRIMARY KEY,
                    nom VARCHAR(50) NOT NULL,
                    prenom VARCHAR(50) NOT NULL,
                    sport VARCHAR(30) NOT NULL,
                    cotisation DECIMAL(8,2) NOT NULL,
                    date_inscription DATE NOT NULL,
                    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )";
                $this->conn->exec($sql);
            }  catch (PDOException $e) {
                return "Erreur lors de la création de la table: " . $e->getMessage();
            }
            try{
                $sql="CREATE TABLE admin(
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    username VARCHAR(50) NOT NULL,
                    password VARCHAR(255) NOT NULL
                )";

                $this->conn->exec($sql);
                $this->conn->exec("
                    INSERT INTO admin (username, password) 
                    VALUES 
                        ('admin','admin'),
                        ('aimad','aimad'),
                        ('youssef','youssef'),
                        ('marwan','marwan'),
                        ('habdeallah','habdeallah')
                ");

            } catch (PDOException $e){
                return "Erreur lors de la création de la table: " . $e->getMessage();
            }
        }

        public function getAdherents() {
            try {
                $sql = "SELECT * FROM adherents";
                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                throw new Exception("Error fetching orders: " . $e->getMessage());
            }
        }

        public function getAdherentByCIN($CIN) {
            try {
                $sql = "SELECT * FROM adherents WHERE CIN = :CIN";
                $stmt = $this->conn->prepare($sql);
                $stmt->execute([':CIN' => $CIN]);
                return $stmt->fetch(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                return "Erreur lors de la récupération de l'adhérent: " . $e->getMessage();
            }
        }

        public function deleteAdherents($CIN) {
            try {
                $sql = "DELETE FROM adherents WHERE CIN = ?";
                $stmt = $this->conn->prepare($sql);
                $stmt->execute([$CIN]);
                return true;
            } catch (PDOException $e) {
                return "Erreur lors de supprimé de l'adherents: " . $e->getMessage();
            }
        }

        public function updateAdherent($CIN, $nom, $prenom, $sport, $cotisation) {
            try {
                $sql = "UPDATE adherents SET 
                    nom = :nom,
                    prenom = :prenom,
                    sport = :sport,
                    cotisation = :cotisation
                WHERE CIN = :CIN";
                
                $stmt = $this->conn->prepare($sql);
                $result = $stmt->execute([
                    ':CIN' => $CIN,
                    ':nom' => htmlspecialchars($nom),
                    ':prenom' => htmlspecialchars($prenom),
                    ':sport' => htmlspecialchars($sport),
                    ':cotisation' => $cotisation
                ]);
                
                return true;
            } catch (PDOException $e) {
                return "Erreur lors de la modification de l'adhérent: " . $e->getMessage();
            }
        }
        public function AjoutAdherent($CIN,$nom,$prenom,$sport,$cotisation,$dateInscription){
            try {
            $sql = "INSERT INTO adherents (CIN,nom,prenom,sport,cotisation,date_inscription) 
                    VALUES (:CIN,:nom,:prenom,:sport,:cotisation,:date_inscription)";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([
                ':CIN' => $CIN,
                ':nom' => htmlspecialchars($nom),
                ':prenom' => htmlspecialchars($prenom),
                ':sport' => htmlspecialchars($sport),
                ':cotisation' => $cotisation,
                ':date_inscription' => $dateInscription
            ]);
            if($stmt){
                return true;
            }
        } catch (PDOException $e) {
            return $e->getMessage();
        }
        }
    }

?>