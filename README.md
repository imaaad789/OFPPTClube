# 🏋️‍♂️ Gestion d’un Club de Sport

![PHP](https://img.shields.io/badge/PHP-8.0%2B-blue?logo=php)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange?logo=mysql)
![Bootstrap](https://img.shields.io/badge/Bootstrap-Frontend-purple?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Présentation
Ce projet est une **application web de gestion d’un club sportif**, permettant d’administrer les adhérents et de présenter le club via une page d’accueil conviviale.  

---

## 🎯 Objectifs
- ✅ Interface simple et intuitive pour gérer les adhérents.  
- ✅ Ajouter, modifier, supprimer et afficher les membres du club.  
- ✅ Présentation claire des activités du club via la page d’accueil.  
- ✅ Base de données MySQL sécurisée pour le stockage des données.  

---

## ⚙️ Fonctionnalités

### 👨‍👩‍👦 Partie publique
- Page d’accueil (`index.php`) avec présentation du club et infos générales.

### 🔐 Partie administration (CRUD)
- **Lister les adhérents** : nom, prénom, sport, cotisation.  
- **Ajouter un adhérent** via formulaire.  
- **Modifier un adhérent** (mise à jour des infos).  
- **Supprimer un adhérent** (suppression définitive).  

---

## 🗄️ Structure de la Base de Données

### Table `adherents`
| Champ        | Type           | Description                       |
|--------------|---------------|-----------------------------------|
| id           | INT, PK, AI   | Identifiant unique                |
| nom          | VARCHAR(255)  | Nom de l’adhérent                 |
| prenom       | VARCHAR(255)  | Prénom de l’adhérent              |
| sport        | VARCHAR(100)  | Sport pratiqué                    |
| cotisation   | DECIMAL(10,2) | Montant de la cotisation          |
| created_at   | TIMESTAMP     | Date d’inscription                |
| updated_at   | TIMESTAMP     | Dernière modification             |

---

## 🛠️ Technologies utilisées
- **Frontend** : HTML5, CSS3, [Bootstrap](https://getbootstrap.com/)  
- **Backend** : PHP (PDO pour sécurité)  
- **Base de données** : MySQL  
- **Serveur** : Apache (WAMP/LAMP)  

---

## 📂 Architecture du projet

```bash
📁 projet-club-sport
│── index.php           # Page d’accueil
│── adherents.php       # CRUD adhérents
│── config.php          # Configuration DB
│── style.css           # Feuille de style
│── db.sql              # Schéma de la base
│
├── 📁 source
│   ├── model           # Classes PHP (Adherent, etc.)
│   ├── controller      # Logique métier
│   └── view            # Templates / vues
