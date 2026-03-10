# 5 Projets React pour pratiquer `useState` et les événements

Ces projets se font **sur une seule page** et permettent de pratiquer :
- `useState`
- `onClick`
- `onChange`
- rendu conditionnel
- manipulation de données

---

# 1. Générateur de couleur 🎨

## Objectif
Créer une application qui génère une **couleur aléatoire**.

## Fonctionnalités
- Bouton **Générer une couleur**
- Changer la **couleur de fond**
- Afficher le **code HEX de la couleur**

## Exemple
Couleur actuelle : `#3FA2D6`

[ Générer une couleur ]

## Concepts React pratiqués
- `useState`
- `onClick`
- génération aléatoire

## Bonus
- bouton **copier la couleur**
- historique des couleurs

---

# 2. Jeu : Devine le nombre 🎲

## Objectif
L’application choisit un nombre **entre 1 et 100** et l’utilisateur doit deviner.

## Fonctionnalités
- input pour entrer un nombre
- bouton **Essayer**
- message :
  - trop grand
  - trop petit
  - gagné

## Exemple
Devine le nombre entre 1 et 100

[ 50 ] [ Essayer ]

Résultat :  
"Trop grand"

## Concepts React pratiqués
- `useState`
- `onChange`
- `onClick`
- conditions

## Bonus
- compteur d'essais
- bouton recommencer

---

# 3. Compteur avancé ⏱

## Objectif
Créer un compteur avec plusieurs actions.

## Fonctionnalités
- bouton **+1**
- bouton **-1**
- bouton **+10**
- bouton **-10**
- bouton **Reset**

## Exemple
0

[ +1 ] [ -1 ]  
[ +10 ] [ -10 ]

[ Reset ]

## Concepts React pratiqués
- gestion d’état avec `useState`
- plusieurs événements `onClick`

## Bonus
- empêcher les nombres négatifs
- changer la couleur si le nombre dépasse 10

---

# 4. Générateur de citations 💬

## Objectif
Afficher une **citation aléatoire**.

## Fonctionnalités
- bouton **Nouvelle citation**
- afficher l'auteur

## Exemple
"La simplicité est la sophistication suprême."  
— Léonard de Vinci

[ Nouvelle citation ]

## Concepts React pratiqués
- tableau de données
- sélection aléatoire
- `useState`
- `onClick`

## Bonus
- bouton **like**
- bouton **copier la citation**

---

# 5. Convertisseur de température 🌡

## Objectif
Convertir **Celsius en Fahrenheit**.

## Fonctionnalités
- champ pour entrer la température
- affichage automatique de la conversion

## Exemple
Celsius : [ 20 ]

Fahrenheit : 68

## Concepts React pratiqués
- `useState`
- `onChange`
- calcul dynamique

## Bonus
- conversion dans les deux sens
- bouton pour inverser les unités