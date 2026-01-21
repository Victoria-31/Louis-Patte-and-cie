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

## 🚧 Fonctionnalités non reliées au backend

Certaines fonctionnalités prévues côté backend ne sont pas encore reliées au frontend, principalement par manque de pages ou de composants dédiés.

À ce stade, **les actions suivantes ne sont pas implémentées côté frontend** :

* authentification (register / login)
* gestion du JWT côté interface utilisateur
* création d’un animal
* modification d’un animal
* création ou modification de visites et de vaccinations

Ces fonctionnalités nécessitent la création de **formulaires dédiés** et de pages supplémentaires côté frontend, qui n’ont pas encore été développées.

---

## ✅ En résumé

* Connexion fonctionnelle entre le frontend et le backend pour la **lecture des données**
* Appels API centralisés
* Données normalisées et typées
* Interface découplée de la structure du backend

