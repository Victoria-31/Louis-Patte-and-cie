# Diagrammes, User story et persona - Patte & Cie

## Persona : Dr. Sophie Moreau

- Âge : 38 ans
- Profession : Vétérinaire
- Expérience : 12 ans en clinique vétérinaire
- Localisation : Clinique vétérinaire en zone périurbaine
- Niveau technologique : Intermédiaire (utilise smartphone et ordinateur quotidiennement, mais préfère les interfaces simples)

### Contexte professionnel

Consulte 15-20 animaux par jour
Fait partie d'une équipe de 3 vétérinaires
Travaille avec 2 assistantes vétérinaires et 1 secrétaire
Jongle entre consultations, urgences et chirurgies
Peu de temps entre chaque patient (10-15 minutes)

### Objectifs

Accéder rapidement aux informations médicales pendant une consultation
Vérifier l'historique des traitements et vaccinations sans quitter la salle de consultation
Consulter les notes des collègues sur les animaux qu'elle voit pour la première fois
Gagner du temps pour se concentrer sur le soin des animaux plutôt que sur la recherche administrative

### Frustrations actuelles

Perd du temps à chercher les dossiers papier dans l'archive
Dossiers parfois utilisés par un collègue au même moment
Difficulté à lire certaines notes manuscrites de ses collègues
Informations dispersées dans plusieurs documents
Stress quand elle ne retrouve pas rapidement une information critique (allergies, traitements en cours, dernière intervention)

### Besoins spécifiques

Interface rapide à charger (connexion parfois instable dans certaines salles de consultation)
Informations essentielles visibles immédiatement (nom, race, âge, allergies, propriétaire)
Recherche efficace par nom d'animal ou nom de propriétaire
Historique complet chronologique et facile à parcourir
Lisibilité sur tablette ou ordinateur de consultation
Accès sécurisé réservé au personnel de la clinique

---

## Use Case : Navigation et Consultation (Utilisateur)
```mermaid
graph LR
    subgraph "Staff Use Case"
        UC1[Page d'acceuil = la liste des animaux]
        UC2[Selection un animal dans la liste pour avoir plus de détail]
        UC3[Visualize le détail de l'animal selectionné]
    end

    User[Véterinaire]

    User --> UC1
    UC1 --> UC2
    UC2 --> UC3
```

---

## User Story

User Story

En tant que vétérinaire,

Je veux avoir accès à la liste des animaux, filtrer et rechercher dans cette liste et avoir accès à la fiche détaillée de chacun des animaux sur cette liste,

Afin d'avoir accès à une liste détaillée de tous les animaux qui sont traités dans mon cabinet avec fluidité et organisation sans contraintes.

---

## Parcour d'utilisateur : Navigation et Consultation (Utilisateur)
```mermaid
graph LR
    subgraph "Système Carnet de Santé Digitalisé"
        UC1[Consulter la liste des animaux]
        UC2[Rechercher un animal]
        UC3[Filtrer la liste]
        UC5[Consulter la fiche détaillée]
        UC6[Voir l'historique médical]
        UC7[Voir les vaccinations]
        UC8[Voir les traitements en cours]
        UC9[Voir les informations propriétaire]
        UC10[Revenir à la liste]
    end
    
    User[Véterinaire]
    
    User -->|accède| UC1
    User -->|effectue| UC2
    User -->|applique| UC3
    User -->|sélectionne| UC5
    
    UC5 -->|inclut| UC6
    UC5 -->|inclut| UC7
    UC5 -->|inclut| UC8
    UC5 -->|inclut| UC9
    
    UC5 -->|permet| UC10
    
    UC2 -.-> UC1
    UC3 -.-> UC1
```