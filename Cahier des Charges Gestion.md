# 📑 Cahier des Charges – Gestion d’un Club de Sport

## 1. Présentation du Projet

Ce projet consiste à créer une **application web** permettant la gestion d’un club sportif.
L’application doit permettre de gérer les adhérents et de présenter le club via une **page d’accueil**.

---

## 2. Objectifs du Projet

* Offrir une interface simple pour gérer les adhérents.
* Permettre l’ajout, la modification, la suppression et l’affichage des adhérents.
* Présenter le club et ses activités dans une page d’accueil conviviale.
* Fournir une base de données MySQL adaptée pour stocker les informations.

---

## 3. Fonctionnalités

### Partie publique

* **Page d’accueil (index.php)** : Présentation du club et des informations générales.

### Partie administration / CRUD adhérents

* **Afficher la liste des adhérents** : Nom, prénom, sport pratiqué, cotisation.
* **Ajouter un nouvel adhérent** : Formulaire avec champs nom, prénom, sport pratiqué et montant de cotisation.
* **Modifier un adhérent** : Mettre à jour les informations existantes.
* **Supprimer un adhérent** : Supprimer définitivement un adhérent de la base de données.

---

## 4. Structure de la Base de Données

**Table `adherents` :**

* `id` : Identifiant unique (INT, AUTO\_INCREMENT, PRIMARY KEY)
* `nom` : Nom de l’adhérent (VARCHAR(255))
* `prenom` : Prénom de l’adhérent (VARCHAR(255))
* `sport` : Sport pratiqué (VARCHAR(100))
* `cotisation` : Montant de la cotisation (DECIMAL(10,2))
* `created_at` : Date d’inscription (TIMESTAMP)
* `updated_at` : Date de dernière modification (TIMESTAMP)

---

## 5. Technologies Utilisées

* **Frontend** : HTML5, CSS3 (style simple mais propre)
* **Backend** : PHP (avec PDO pour sécurité)
* **Base de données** : MySQL
* **Serveur** : Apache (WAMP / LAMP)

---

## 6. Architecture du Projet

* **index.php** : Page d’accueil présentant le club.
* **adherents.php** : Page CRUD pour gérer les adhérents (liste, ajout, modification, suppression).
* **config.php** : Configuration de la base de données.
* **style.css** : Feuille de style simple pour l’ensemble du site.

---

## 7. Sécurité

* Validation des données côté serveur.
* Protection contre les injections SQL (utilisation de PDO).
* Échappement des données affichées (`htmlspecialchars`).

---

## 8. Livrables

* Code source complet (PHP, HTML, CSS).
* Schéma de la base de données (fichier SQL).
* Documentation technique succincte.
* Captures d’écran montrant le fonctionnement des fonctionnalités CRUD.

