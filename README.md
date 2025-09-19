# 📑 Cahier des Charges - Gestion d'un Club Sportif

## 1. Présentation du Projet

Ce projet est une **application web** pour gérer un club sportif. L'application permet de :
- Présenter le club sur une page d'accueil attractive
- Gérer les adhérents (ajout, modification, suppression, affichage)
- Sécuriser l'accès avec un système de connexion

L'application est moderne avec des animations et un design soigné.

---

## 2. Objectifs du Projet

### 🎯 Objectifs principaux
- **Interface utilisateur** : Design moderne et responsive
- **Gestion des données** : CRUD complet pour les adhérents
- **Sécurité** : Authentification et protection des données
- **Performance** : Chargement rapide et fluidité

### 🎯 Fonctionnalités attendues
- Page d'accueil présentant le club
- Espace administrateur pour gérer les membres
- Base de données MySQL optimisée
- Interface mobile-friendly

---

## 3. Fonctionnalités Détaillées

### 📱 Partie Publique

#### Page d'Accueil (`index.html` / `index.php`)
- **Présentation du club** : Logo, slogan, description
- **Design moderne** : Animations, dégradés, particules flottantes
- **Bouton d'action** : Connexion utilisateur
- **Responsive** : Adapté mobile et desktop

#### Système de Connexion
- Formulaire de connexion (nom utilisateur/mot de passe)
- Option "Se souvenir de moi"
- Validation côté client et serveur
- Redirection après connexion réussie

### 🛡️ Partie Administration

#### Gestion des Adhérents (CRUD)
1. **Lire (Read)** : Affichage de la liste des adhérents
2. **Créer (Create)** : Formulaire d'ajout d'adhérent
3. **Mettre à jour (Update)** : Modification des informations
4. **Supprimer (Delete)** : Suppression d'un adhérent

#### Données gérées
- Nom et prénom de l'adhérent
- Sport pratiqué
- Montant de la cotisation
- Dates de création/modification

---

## 4. Structure de la Base de Données

### 🗄️ Table `adherents`
| Champ       | Type            | Description                     | Contraintes     |
|-------------|-----------------|---------------------------------|-----------------|
| `id`        | INT             | Identifiant unique              | PRIMARY KEY, AUTO_INCREMENT |
| `nom`       | VARCHAR(255)    | Nom de famille                  | NOT NULL        |
| `prenom`    | VARCHAR(255)    | Prénom                          | NOT NULL        |
| `sport`     | VARCHAR(100)    | Sport pratiqué                  | NOT NULL        |
| `cotisation`| DECIMAL(10,2)   | Montant de cotisation           | NOT NULL        |
| `created_at`| TIMESTAMP       | Date d'inscription              | DEFAULT CURRENT_TIMESTAMP |
| `updated_at`| TIMESTAMP       | Date de modification            | ON UPDATE CURRENT_TIMESTAMP |

### 🔐 Table `admin` (système de connexion)
| Champ      | Type         | Description          |
|------------|--------------|----------------------|
| `id`       | INT          | Identifiant admin    |
| `username` | VARCHAR(100) | Nom d'utilisateur    |
| `password` | VARCHAR(255) | Mot de passe haché   |

---

## 5. Technologies Utilisées

### 🛠️ Stack Technique

| Composant     | Technologie              |
|---------------|--------------------------|
| **Frontend**  | HTML5, CSS3, JavaScript  |
| **CSS**       | SCSS/Sass                |
| **Backend**   | PHP                      |
| **Base**      | MySQL                    |
| **Sécurité**  | PDO, CSRF Tokens         |
| **Serveur**   | Apache/Nginx             |

### 🎨 Design System
- **Couleurs** : Palette orange/dégradé (sportif, dynamique)
- **Typographie** : Google Fonts (Inter)
- **Animations** : CSS transitions et keyframes
- **Responsive** : Mobile-first approach

---

## 6. Architecture du Projet

```
📁 projet-club-sport/
│
├── 📁 source/
│   ├── 📁 config/           # Configuration base de données
│   │   ├── create_db.php    # Création base
│   │   └── connexion_db.php # Connexion PDO
│   │
│   ├── 📁 model/            # Modèles PHP
│   │   └── PrSport.php      # Modèle adhérents
│   │
│   ├── 📁 controller/       # Contrôleurs (à créer)
│   │   └── AdherentController.php
│   │
│   └── 📁 view/             # Vues/templates
│       ├── login.php        # Formulaire connexion
│       └── adherents.php    # CRUD adhérents
│
├── 📁 assets/
│   ├── 📁 css/              # Styles
│   │   └── styles.css
│   ├── 📁 js/               # JavaScript
│   │   ├── main.js
│   │   └── main.ts          # TypeScript (optionnel)
│   └── 📁 images/           # Médias
│
├── 📁 docs/                 # Documentation
│   └── cahier-charges.md
│
├── index.html               # Page d'accueil publique
├── login.php                # Traitement connexion
├── db_init.php              # Initialisation DB
├── db.sql                   # Schéma base de données
└── README.md                # Documentation projet
```

---

## 7. Spécifications Techniques

### 🔒 Sécurité

#### Mesures de sécurité implémentées
1. **PDO Prepared Statements** : Protection contre SQL injection
2. **CSRF Tokens** : Protection contre attaques CSRF
3. **Hachage mots de passe** : Sécurisation des credentials
4. **Validation données** : Côté client ET serveur
5. **XSS Protection** : `htmlspecialchars()` pour affichage

#### Bonnes pratiques
- Sessions sécurisées avec timeout
- Cookies HttpOnly et Secure
- Validation de tous les inputs
- Logs d'erreurs sans exposition

### 📱 Interface Utilisateur

#### Design Guidelines
- **Palette** : Orange principal (#FF6B35), accents (#F7931E)
- **Typographie** : Inter (300, 400, 500, 600, 700)
- **Espacements** : 8px grid system
- **Boutons** : Bordures arrondies, ombres subtiles
- **Animations** : Transitions fluides (0.3s), micro-interactions

#### Responsive Breakpoints
| Écran       | Largeur     | Adaptations                     |
|-------------|-------------|---------------------------------|
| Mobile      | < 480px     | Navigation hamburger            |
| Tablette    | 480-768px   | Grilles 2 colonnes              |
| Desktop     | 768-1200px  | Grilles 3-4 colonnes            |
| Large       | > 1200px    | Pleine largeur, espacements max |

---


