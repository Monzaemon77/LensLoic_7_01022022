# LensLoic_7_01022022

Projet 7 d'OpenClassoom

Ayant des diffcultés avec Redux et MySQL, voici la version 1 du projet 7 ayant pour Fonctionnalités :
-Creation d'un utilisateur
-Suppression de son compte
-Poster un message texte
-Lire les derniers messages des utilisateurs

Pour lancer le projet :

Importer la base données Mysql.

Dans le dossier backend faite:
-npm install

-dans le dossier config et le fichier db.js, remplacer user et password par vos données de connexion pour acceder à la base de données MySQL.

-npm start pour lancer le server

Dans le dossier frontend faite:

-npm install
-npm start pour lancer le frontend

Pour créer un utilisateur admin modifier l'user qui doit etre admin :

UPDATE user SET user_admin = true WHERE user_id = insert l'id de l'user qui est admin;
