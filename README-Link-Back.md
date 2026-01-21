# 🔗 Connexion du Frontend au Backend

Ce projet frontend (Next.js / React) est connecté à une API backend afin de remplacer progressivement des données mockées par des données réelles.

L’objectif est de **récupérer les données du backend**, de les **adapter au format attendu par le frontend**, puis de les **stocker dans des états React** pour les afficher et les manipuler (recherche, filtres, tri).

---

## 🧱 Architecture mise en place

### 1️⃣ Centralisation des appels API (`request.ts`)

Un fichier utilitaire `request.ts` a été créé pour éviter la répétition de l’URL de base de l’API et centraliser les appels HTTP.

* Utilisation de **Axios**
* L’URL de base est définie via une variable d’environnement :

```
NEXT_PUBLIC_API_URL
```

* Une fonction générique `getAllItems(endpoint)` permet de récupérer les données de n’importe quelle ressource (animals, owners, etc.)

👉 Cela rend le code plus lisible, maintenable et réutilisable.

---

### 2️⃣ Récupération des données côté frontend

Dans les pages React (components client), les données sont récupérées :

* au montage du composant (`useEffect`)
* via la fonction `getAllItems`
* puis stockées dans des **états React** avec `useState`

Exemples d’états :

* `animals`
* `owners`

Ces états servent ensuite de source unique de vérité pour l’affichage.

---

### 3️⃣ Normalisation des données (adapter le back au front)

Le backend et le frontend n’utilisent pas exactement les mêmes conventions de nommage ni la même structure de données.

👉 Un fichier `normalizers.ts` a donc été créé pour :

* transformer les objets issus de l’API (`ApiAnimal`, `ApiVisit`, `ApiVaccine`, etc.)
* en objets adaptés au frontend (`Animal`, `Vaccination`, `Historique`)

Exemples de transformations :

* `administrationDate` → `date`
* `reason` → `motif`
* `observation` → `notes`
* regroupement des `vaccines` et `visits` directement dans l’animal

Cela permet :

* un JSX plus simple
* une séparation claire entre **logique métier** et **affichage**
* une meilleure maintenabilité si le backend évolue

---

### 4️⃣ Typage avec TypeScript

Des interfaces TypeScript ont été définies pour :

* les données venant de l’API (`ApiAnimal`, `ApiVisit`, `ApiVaccine`, `ApiOwner`)
* les données utilisées côté frontend (`Animal`, `Vaccination`, `Historique`, `Proprietaire`)

👉 Cela garantit :

* une meilleure sécurité
* une autocomplétion fiable
* moins d’erreurs lors du mapping et de l’affichage

---

### 5️⃣ Exploitation des données

Une fois les données normalisées et stockées dans les états :

* recherche multi-critères (animal, espèce, propriétaire, vaccination)
* filtres (sexe, espèce, propriétaire, vaccination)
* navigation dynamique vers une page détail par animal

---

## ✅ Résumé

✔️ Appels API centralisés
✔️ Données récupérées via `useEffect`
✔️ Normalisation des données back → front
✔️ Typage strict avec TypeScript
✔️ Frontend découplé de la structure du backend

