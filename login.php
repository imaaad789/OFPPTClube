<?php
session_start();
header('Content-Type: application/json');

require_once __DIR__ . '/source/config/connexion_db.php';
require_once __DIR__ . '/db_init.php';
require_once __DIR__ . '/../project/source/model/PrSport.php'; 

try {
    $pdo = DatabaseConnection::getInstance()->getConnection();
    $prSport = new PrSport($pdo);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false, 
        'message' => 'Erreur de connexion à la base de données'
    ]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');
    $remember = $_POST['remember'] ?? '0';
    
    if (empty($username) || empty($password)) {
        echo json_encode([
            'success' => false, 
            'message' => 'Le nom d\'utilisateur et le mot de passe sont requis'
        ]);
        exit;
    }

    try {
        $sql = "SELECT id, username FROM admin WHERE username = :username AND password = :password";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':username' => $username, 
            ':password' => $password
        ]);
        
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['logged_in'] = true;
            $_SESSION['login_time'] = time();
            
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
            
            if ($remember === '1') {
                setcookie(
                    'remember_user', 
                    $username, 
                    time() + (86400 * 30),
                    '/', 
                    '', 
                    false, 
                    true   
                );
            }
            
            echo json_encode([
                'success' => true,
                'message' => 'Connexion réussie ! Bienvenue ' . htmlspecialchars($username),
                'redirect' => 'source/index.php',
                'csrf_token' => $_SESSION['csrf_token']
            ]);
            
        } else {
            echo json_encode([
                'success' => false, 
                'message' => 'Nom d\'utilisateur ou mot de passe incorrect'
            ]);
        }
        
    } catch (PDOException $e) {
        error_log("Erreur login: " . $e->getMessage());
        echo json_encode([
            'success' => false, 
            'message' => 'Erreur technique. Veuillez réessayer.'
        ]);
    }  
}

?>