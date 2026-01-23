# 🔗 Connexion Frontend / Backend

Ce frontend (Next.js / React) est connecté à une API backend afin de remplacer des données mockées par des données réelles.

L’objectif principal est de **récupérer les données du backend**, de les **adapter au format attendu par le frontend**, puis de les **exploiter dans l’interface** (liste, recherche, filtres, navigation).

---

## 🧱 Principe général

### 1️⃣ Centralisation des appels API

Les appels HTTP sont centralisés dans un fichier utilitaire `request.ts`.

* Utilisation de **Axios**
* URL de base définie via la variable d’environnement :

```
NEXT_PUBLIC_API_URL
```

* Une fonction générique `getAllItems(endpoint)` permet de récupérer facilement les données de différentes ressources (animals, owners, etc.)

👉 Cela évite la duplication de code et facilite la maintenance.

---

### 2️⃣ Récupération et stockage des données

Les données sont récupérées au montage des composants (`useEffect`) puis stockées dans des **états React** (`useState`).

Ces états constituent la source de données utilisée pour l’affichage et les traitements côté frontend.

---

### 3️⃣ Normalisation des données

Le backend et le frontend n’utilisent pas exactement la même structure ni les mêmes conventions de nommage.

Un fichier `normalizers.ts` a donc été mis en place pour :

* transformer les données issues de l’API (`ApiAnimal`, `ApiVisit`, `ApiVaccine`, etc.)
* en objets adaptés aux besoins du frontend (`Animal`, `Vaccination`, `Historique`)

Exemples :

* `administrationDate` → `date`
* `reason` → `motif`
* `observation` → `notes`

👉 Cela permet de découpler le frontend de la structure du backend et de simplifier le JSX.

---

### 4️⃣ Typage TypeScript

Des interfaces TypeScript sont utilisées pour :

* typer les données reçues depuis l’API
* typer les données manipulées côté frontend

Cela améliore la fiabilité du code, l’autocomplétion et limite les erreurs lors du mapping.

---
## 🔐 Authentification utilisateur

### Login & Register

Mise en place de formulaires **Login** et **Register** reliés à l’API back-end.

Lors de la connexion :

- le serveur renvoie le **rôle de l’utilisateur** (`owner`, `veterinarian`, etc.)
- ce rôle est stocké côté frontend afin de gérer l’**affichage conditionnel** de l’interface

Gestion des retours utilisateurs :

- messages d’erreur
- confirmation de connexion

---

## 🧭 AuthContext global

Création d’un **AuthContext React** permettant de :

- stocker le rôle de l’utilisateur connecté
- rendre cette information accessible dans toute l’application

### Fonctionnement

- le contexte est initialisé au chargement à partir du **stockage local**
- lors du login, le rôle est **mis à jour dynamiquement** suite à la réponse du serveur

➡️ Cette approche permet une **gestion centralisée de l’état d’authentification**, sans dupliquer la logique dans chaque composant.

---

## 🧭 Navigation dynamique (Navbar)

La **navbar s’adapte automatiquement** en fonction du rôle de l’utilisateur.

- les liens spécifiques (ex : accès vétérinaire) sont affichés ou masqués selon les permissions
- cette logique est entièrement pilotée par le **AuthContext**

👉 Cela améliore l’expérience utilisateur en évitant d’afficher des fonctionnalités non accessibles.

⚠️ Les règles de sécurité restent garanties côté **back-end** : le frontend ne gère que l’affichage, les routes restent protégées côté API.

---

## 🚧 Fonctionnalités non encore reliées au backend

Certaines fonctionnalités prévues côté backend ne sont pas encore reliées au frontend, principalement par manque de pages ou de composants dédiés.

À ce stade, les actions suivantes ne sont pas encore implémentées côté frontend :

- création d’un animal  
- modification d’un animal  
- création ou modification de visites et de vaccinations  
- dashboards dédiés selon le rôle  

Ces fonctionnalités nécessitent la création de **formulaires dédiés** et de **pages supplémentaires** côté frontend.

---

## 🚀 Axes d’évolution envisagés

Mise en place de **dashboards personnalisés selon le rôle** :

- **Dashboard vétérinaire** : gestion des animaux, visites, vaccinations  
- **Dashboard propriétaire** : consultation de ses animaux et de leur carnet de santé  

Navigation et accès conditionnels basés sur le rôle stocké dans le **AuthContext**.

Évolution vers une interface plus **personnalisée et orientée métier**.

---

## ✅ En résumé

- Connexion fonctionnelle entre le frontend et le backend pour la lecture des données  
- Appels API centralisés  
- Données normalisées et typées  
- Authentification intégrée côté frontend  
- Gestion des rôles via un **AuthContext global**  
- Interface découplée de la structure du backend et prête à évoluer  

