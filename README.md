#  TP : Création d’un CV en HTML / CSS

##  Objectif général

### Vous trouvez le CV dans le lien ci-joint : https://medbenaissa1.github.io/tp_cv/
L’objectif de ce TP est de créer une page web contenant un exemple de **CV** en utilisant les technologies **HTML** et **CSS**.  
À la fin du TP, la version finale du CV sera mise en ligne et le code source sera déposé sur **GitLab**, avec des commits réguliers à chaque étape.

---

##  Étape 1 – Structure HTML de base

###  Objectif
Créer la structure de base d’un document HTML pour la page du CV.  
Le but est d’obtenir un CV **structuré mais sans mise en forme**, afin de comprendre la sémantique et la hiérarchie du document HTML.

---

###  Fichier concerné
- **Nom du fichier :** `ubo-resume.html`

---

### Code utilisé

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Mon CV</title>
  <meta name="description" content="À propos de moi.">
  <meta name="keywords" content="web, developer, resume">
  <meta name="author" content="Mon nom">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <div id="wrapper"></div>
</body>
</html>
```

 Explications du code
```html
 <!DOCTYPE html>
```

Indique que le document utilise la norme HTML5.
```html
 <html lang="fr">
```

Définit la langue principale du document comme étant le français.
```html
 <meta charset="utf-8">
```

Permet l’utilisation correcte des caractères accentués et symboles.
```html
 <title>
```

Affiche le titre de la page dans l’onglet du navigateur (ici : “Mon CV”).

```html
 Balises <meta>
```

* description : courte description du contenu de la page.

* keywords : mots-clés utiles pour le référencement.

* author : nom de l’auteur du document.

* viewport : rend la page responsive, adaptée aux écrans mobiles.
```html
 <div id="wrapper">
```
Crée un conteneur principal pour regrouper tout le contenu du CV (en-tête, profil, formation, expériences, etc.).
Pour l’instant, il est vide.

#### Vérification du résultat

Pour visualiser le fichier HTML dans le navigateur :

Clic droit sur le fichier ubo-resume.html → “Open with Live Server”.

Le navigateur s’ouvre sur :
http://127.0.0.1:5500/ubo-resume.html

La page s’affiche (vide, c’est normal à cette étape).

###  Commit GitLab

Une fois cette étape validée, on enregistre le travail et on l’envoie sur GitLab :

```bash
git add .
git commit -m "Ajout du fichier ubo-resume.html et structure de base du CV"
git push -u origin main
```
## Étape 2 – Ajout du bloc header

### Objectif
Ajouter un en-tête complet contenant :
- le nom et le métier,
- une photo fictive,
- et une section d’informations personnelles.

### Code utilisé
```html

</head>
<body>
  <div id="wrapper">

    <header>
      <h1>Ahmed AL KHALIDI</h1>
      <h2>Développeur Web Senior</h2>
      <img src="images/photo_cv.jpeg" alt="Photo de profil fictive">
      <section id="infos">
        <h3>Informations personnelles</h3>
        <ul>
          <li><strong>Nom :</strong> Al Khalidi</li>
          <li><strong>Prénom :</strong> Ahmed</li>
          <li><strong>Adresse :</strong> 123 Rue des Jasmins, Rabat, Maroc</li>
          <li><strong>Date de naissance :</strong> 12 mars 1945 (80 ans)</li>
          <li><strong>Email :</strong> <a href="mailto:ahmed.khalidi@example.com">ahmed.khalidi@example.com</a></li>
          <li><strong>Nationalité :</strong> Marocaine</li>
        </ul>
      </section>
    </header>
```

### Explication
```bash
Le bloc <header> contient le nom (<h1>), le métier (<h2>), une photo fictive (<img>) et les informations personnelles structurées dans une liste.

La page reste sans style CSS pour le moment, cette partie viendra plus tard.
```
### Commit GitLab
``` bash
git add ubo-resume.html
git commit -m "Étape 2 : ajout du bloc header avec photo et informations personnelles"
git push
```
## Étape 3 – Ajout du contenu principal du CV

### Objectif
Structurer le contenu du CV en ajoutant toutes les sections essentielles pour un profil professionnel complet.  
L’objectif est d’obtenir une page claire et bien organisée avant d’y appliquer le style CSS.

### Contenu ajouté
Plusieurs nouvelles sections ont été créées à la suite du header :

- **Présentation** : un court texte qui décrit le parcours, la motivation et le profil du développeur.  
- **Expériences professionnelles** : une série d’articles listant les postes occupés, les entreprises et les missions réalisées.  
- **Compétences** : une liste détaillée des langages, frameworks, outils et bases de données maîtrisés, structurée avec des balises adaptées.  
- **Formation** : les diplômes et établissements suivis, avec leurs années.  
- **Langues** : les langues parlées avec leur niveau de maîtrise.  
- **Centres d’intérêt** : des activités ou passions personnelles qui complètent le profil.

### Explication
Cette étape a permis de donner une véritable structure au CV.  
Chaque section est indépendante et clairement identifiée, ce qui facilitera la mise en forme CSS par la suite.  
L’utilisation d’éléments comme `<section>`, `<article>`, `<dl>` ou `<ul>` rend le document plus lisible et sémantiquement correct.

### Commit GitLab
```bash
git add ubo-resume.html
git commit -m "Étape 3 : ajout du contenu principal du CV (présentation, expériences, compétences, formation, langues, hobbies)"
git push
```
## Étape 4 – Ajout du footer

### Objectif
Ajouter un pied de page contenant les liens vers les différents comptes personnels ou professionnels, ainsi que quelques informations générales sur la page.

### Contenu ajouté
Un bloc **footer** a été ajouté en bas du CV.  
Il regroupe :

- des liens vers les profils externes du développeur (LinkedIn, GitHub, Twitter, Flickr, etc.) ;  
- une courte phrase d’information comme le nom de l’auteur, l’année de création de la page ou le type de licence.

### Explication
Le pied de page permet de conclure la page de manière propre et professionnelle.  
Il offre un accès rapide aux plateformes où le développeur est actif et crédibilise le profil.  
Aucune icône n’a été utilisée pour le moment : seuls les liens textuels sont affichés.  
Le contenu reste simple et épuré en attendant l’ajout de style via le CSS.

### Commit GitLab
```bash
git add ubo-resume.html
git commit -m "Étape 4 : ajout du footer avec liens professionnels et informations générales"
git push
```
## Étape 5 – Versionnement et tag de la structure du CV

### Objectif
Finaliser la première version complète du CV en HTML, contenant toute la structure du contenu avant le style CSS, et la taguer pour marquer cette étape importante dans le dépôt Git.

### Actions réalisées
- L’ensemble du contenu HTML a été finalisé : header, présentation, expériences, compétences, formation, langues, centres d’intérêt et footer.  
- Tous les fichiers ont été ajoutés et commités dans le dépôt GitLab.  
- Un tag a été créé pour identifier cette version comme la version “structure” du projet.

### Commandes Git utilisées
```bash
git add .
git commit -m "Version finale de la structure du CV"
git tag structure
git push
git push origin structure
```

## Partie 2 – Un peu de style

### Étape 1 – Création du fichier CSS

### Objectif
Commencer à appliquer du style au CV en créant le premier fichier de feuille de style CSS.  
Ce fichier définit les propriétés de base comme la couleur du texte et la taille de la police.

### Contenu ajouté
Un nouveau dossier `css` a été créé pour regrouper les fichiers de style.  
Le fichier `resume.css` contient les premières règles :

- Définition d’une couleur de texte (`#444`) pour les éléments principaux : `html`, `button`, `input`, `select`, `textarea`.  
- Définition de la taille de la police (`1em`) et de la hauteur de ligne (`1.4`) pour un texte plus lisible.

### Commit GitLab
```bash
git add css/resume.css
git commit -m "Partie 2 : ajout du fichier CSS de base resume.css"
git push
```

## Partie 2 – Un peu de style

### Étape 2 – Liaison du fichier CSS au document HTML

### Objectif
Relier la feuille de style `resume.css` à la page HTML pour que les premières règles de style s’appliquent à l’ensemble du CV.

### Explication
La balise `<link>` a été ajoutée dans la partie `<head>` du fichier `ubo-resume.html`.  
Elle permet de charger le fichier `css/resume.css` et d’appliquer automatiquement les styles définis : couleur du texte, taille et hauteur de ligne.  
Cette étape marque le début de la mise en forme visuelle du CV.

### Commit GitLab
```bash
git add ubo-resume.html
git commit -m "Partie 2 : liaison du fichier CSS au HTML"
git push
```
### Étape 3 – Mise en forme générale de la page

### Objectif
Donner une première mise en page au CV en appliquant un fond sombre et en centrant le contenu principal.

### Détails
- Le fond de la page (`html`) a été défini avec une couleur sombre `#777` pour faire ressortir le contenu.  
- Le bloc principal identifié par `#wrapper` possède maintenant :
  - une **largeur maximale** de `900px` pour les grands écrans,  
  - une **largeur minimale** de `320px` pour s’adapter aux petits écrans,  
  - et des **marges automatiques** à gauche et à droite pour le **centrer horizontalement**.  
- Une couleur de fond claire a été ajoutée au wrapper pour garantir une bonne lisibilité sur le fond sombre.


### Étape 3c – Mise en forme du header

### Objectif
Styliser l’en-tête du CV en mettant en valeur la photo et en structurant visuellement la partie supérieure de la page.

### Détails
- L’image du header est **alignée à droite** grâce à la propriété `float: right`.  
- Elle possède un **contour de 1px** de couleur `#ccc`, des **bords arrondis de 3px**, et un **fond blanc** pour ressortir sur le fond sombre.  
- Un **effet d’ombre** a été ajouté avec les paramètres `0 2px 4px rgba(0,0,0,0.2)` afin de donner une légère impression de relief.  
- Le header contient aussi un léger **remplissage interne (padding)** pour espacer le contenu.

### Commit GitLab
```bash
git add css/resume.css
git commit -m "Partie 2 : ajout d’un fond sombre et centrage du contenu principal"
git push
```


### Étape 4 – Ajout de la police d’icônes Font Awesome et intégration dans le footer

### Objectif
Permettre l’utilisation d’icônes vectorielles dans le CV afin de rendre le pied de page plus visuel et professionnel.

### 1. Ajout du lien Font Awesome dans le HTML
Un lien vers la feuille de style de **Font Awesome** a été ajouté dans la balise `<head>` du fichier `ubo-resume.html` :

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
```



### Icônes
Intégrer les icônes correspondantes à chaque lien professionnel dans le pied de page du CV.


### Détails
- Les classes `fa fa-linkedin`, `fa fa-github`, `fa fa-twitter` et `fa fa-flickr` ont été utilisées pour afficher les icônes correspondantes.  
- Chaque icône est placée avant le texte du lien, dans une balise `<i>`.  
- Cela rend le footer plus visuel et professionnel, tout en restant simple et sans image externe.

### Étape 5 – Changer la police avec Adobe Edge Web Fonts

### Objectif
Améliorer la présentation du CV en changeant la police d’écriture utilisée pour le nom et les titres, grâce au service **Adobe Edge Web Fonts**.

### Démarche
1. Aller sur le site : [https://edgewebfonts.adobe.com/](https://edgewebfonts.adobe.com/)
2. Sélectionner une police de caractères adaptée à votre CV .
3. Copier la balise `<script>` fournie par le site et l’ajouter dans la balise `<head>` du fichier `ubo-resume.html`.
4. Dans le fichier `css/resume.css`, appliquer cette police aux titres de niveau `h1`.

Exemple :
- Ajout dans le HTML :
  ```html
  <script src="https://use.edgefonts.net/source-sans-pro.js"></script>
  ```
## Partie 2 – Un peu de style  
### Étape 6 – Stylisation complète du CV

####  Objectif  
Donner un aspect professionnel au CV grâce à une feuille de style complète.  
L’objectif est de structurer les blocs, harmoniser les couleurs, espacer correctement les éléments et rendre la page plus agréable à lire.

---

### Code ajouté – `css/resume.css`

```css
/* --- Base --- */
:root{
  --bg:#777;
  --paper:#fff;
  --ink:#222;
  --muted:#555;
  --accent:#0e7490; /* bleu/teal discret */
}

html,button,input,select,textarea{ color:#444; }
html{ font-size:16px; line-height:1.6; background:var(--bg); }
body{ margin:0; font-family: system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif; color:var(--ink); }

/* Conteneur principal */
#wrapper{
  max-width:900px;
  min-width:320px;
  margin:24px auto;
  background:var(--paper);
  border-radius:10px;
  padding:28px;
  box-shadow:0 8px 24px rgba(0,0,0,.15);
}

/* --- Header propre (grille) --- */
header {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  background: #f9f9f9;
  padding: 20px 30px;
  border-radius: 8px;
  gap: 10px;
}

/* bloc texte à gauche */
header .intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* photo et infos à droite */
header .photo-infos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

/* photo */
header img {
  width: 300px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
}

/* titres */
header h1 {
  margin: 0;
  font-size: 1.8rem;
  font-family: "source-sans-pro", sans-serif;
  color: #222;
}

header h2 {
  margin: 6px 0 0;
  color: var(--accent);
  font-weight: 600;
}

/* Infos perso */
#infos h3{ font-size:1rem; margin:8px 0; color:var(--muted); }
#infos ul{
  list-style:none; padding:0; margin:0;
  display:grid; gap:4px 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
}
#infos li{ margin:0; }

/* --- Sections --- */
section{ margin:28px 0; }
section h2{
  font-size:1.25rem; margin:0 0 8px;
  border-bottom:1px solid #eee; padding-bottom:4px;
}

/* Compétences en liste de définition */
#competences dl{
  display:grid; grid-template-columns:160px 1fr; gap:8px 16px; margin:0;
}
#competences dt{ font-weight:600; color:var(--muted); }
#competences dd{ margin:0; }

/* --- Liens --- */
a{ color:var(--accent); text-decoration:none; }
a:hover{ text-decoration:underline; }

/* --- Footer --- */
footer{
  margin-top:32px; padding-top:16px;
  border-top:1px solid #eee; color:#666;
}
footer ul{ list-style:none; padding:0; margin:0 0 8px; display:flex; gap:12px; flex-wrap:wrap; }
footer i{ margin-right:6px; }
```
### Explications principales

Variables globales (:root) : facilitent la gestion des couleurs et du thème.

Structure du document (html, body) : met en place la police et le fond gris global.

Conteneur principal (#wrapper) : zone centrale blanche, arrondie, avec ombre pour un effet “carte”.

Header (header) : grille équilibrée entre texte (nom, métier) et photo/informations.

Photo : agrandie (300px), avec bordure fine et ombre légère pour la mettre en valeur.

Titres : typographie “Source Sans Pro” pour un rendu moderne, couleur principale foncée.

Sections (section) : espacées, avec titres soulignés pour une meilleure lisibilité.

Compétences (dl) : tableau à deux colonnes pour une présentation claire des compétences techniques.

Liens (a) : bleus, soulignés uniquement au survol pour plus de sobriété.

Footer : simple, gris clair, avec liens horizontaux et espacement régulier.


## Etape 7 - Commit et tag Git
```bash
git add css/resume.css ubo-resume.html
git commit -m "Étape 6 : stylisation complète du CV (header, contenu, footer)"
git push
git tag CSS
git push origin CSS
```


## Partie 3 – Mise en ligne - Déploiement automatique avec GitLab Pages

####  Objectif  
Mettre le CV en ligne sur GitLab pour qu’il soit visible publiquement via **GitLab Pages**.  
Le but est que chaque commit sur la branche `main` déclenche une mise à jour automatique du site web.

---

###  Création du fichier `.gitlab-ci.yml`

Dans le répertoire racine du projet `TP_CV/`, créer un fichier nommé :   .gitlab-ci.yml

Et y insérer le contenu suivant :

```yaml
pages:
  stage: deploy
  script:
    - mkdir public
    - cp -r * public/
  artifacts:
    paths:
      - public
  only:
    - main
```

#### Explication du fichier
* pages: → indique à GitLab qu’il s’agit d’un job de déploiement pour GitLab Pages.

* stage: deploy → exécute le déploiement une fois les commits effectués.

* script: → ensemble des commandes exécutées :

* mkdir public → crée un dossier .public pour les fichiers du site.

* cp -r * public/ → copie tous les fichiers du projet (HTML, CSS, images...) dans ce dossier.

* artifacts: → spécifie les fichiers que GitLab doit conserver pour la mise en ligne.

* only: - main → exécute ce déploiement uniquement sur la branche principale main.

 Étapes dans Git
Ensuite, enregistre et pousse la configuration :

```bash
git add .gitlab-ci.yml
git commit -m "Étape 7 : ajout du déploiement GitLab Pages"
git push
```

GitLab va automatiquement :

* détecter le fichier .gitlab-ci.yml

* créer un pipeline CI/CD

* déployer ton CV sur GitLab Pages

### Accéder à ton CV en ligne
Une fois le pipeline terminé, ton CV sera disponible à cette adresse :

```bash
https://gitlab-depinfo-2025.univ-brest.fr/e22507739/tp_cv/
```


Tu peux tester en ouvrant cette URL dans ton navigateur :
si tout est bien configuré, ton CV s’affichera directement en ligne 

### Création du tag “pages”
Une fois que le site est accessible en ligne, ajoute un tag pour marquer cette étape :

```bash
git tag pages
git push origin pages
```
Cela permet de repérer la version du projet correspondant à la mise en ligne réussie.

## Étape 3 – Mise en ligne du CV

###  Objectif
Mettre le CV HTML/CSS en ligne afin qu’il soit accessible publiquement sur Internet.  
Deux solutions ont été testées : **GitLab Pages** (hébergement universitaire) et **GitHub Pages** (solution alternative).

---

### Partie 1 : Tentative avec GitLab Pages

#### Objectif
Utiliser le système d’intégration continue (CI/CD) de GitLab pour publier automatiquement le contenu du CV à chaque *commit* sur la branche `main`.

#### Fichier `.gitlab-ci.yml`

```yaml
image: alpine:latest

pages:
  stage: deploy
  script:
    - apk add --no-cache bash
    - mkdir -p public
    - cp -r ./ubo-resume.html ./public/index.html
    - cp -r ./css ./images ./README.md ./public/ || true
  artifacts:
    paths:
      - public
  only:
    - main

```


### Fonctionnement

À chaque git push, GitLab exécute le pipeline CI/CD.

Le script crée un dossier public/ et y copie tous les fichiers nécessaires.

Ce dossier est publié automatiquement par GitLab Pages.

Résultat : 

*  Le pipeline CI/CD fonctionne correctement.
*  Cependant, le service GitLab Pages est désactivé sur le serveur universitaire gitlab-depinfo-2025.univ-brest.fr.
Le site ne peut donc pas être accessible publiquement malgré le succès du pipeline.

###  Partie 2 : Déploiement sur GitHub Pages (solution fonctionnelle)

Étapes : 

* Création d’un dépôt GitHub nommé tp_cv :
 https://github.com/medbenaissa1/tp_cv

* Ajout du dépôt distant en SSH :
```bash
git remote add githubssh git@github.com:medbenaissa1/tp_cv.git
git push githubssh main
```

* Activation de GitHub Pages :

* Aller dans Settings → Pages

* Sélectionner :
    * Source : Deploy from a branch
    * Branch : main / (root)

* Cliquer sur Save

### Le lien du CV est : https://medbenaissa1.github.io/tp_cv/



## Étape 4 – Responsive 

### 1. Création du fichier css/responsive.css

On crée un fichier séparé dédié à la gestion du comportement de la page selon la taille de l’écran.



*  But :
Vérifier visuellement que la page réagit quand on réduit la largeur de la fenêtre.
Chaque changement de couleur montre qu’une règle @media différente s’applique.

### 2. Ajouter le fichier à la page HTML et observer le comportement
 Ligne à ajouter dans le <head> :
 ```html
<link rel="stylesheet" href="css/responsive.css">
```

#### Explication :

* Cette ligne charge les styles responsive en complément de resume.css.

* Lorsque tu redimensionnes la fenêtre :

* Au-dessus de 740px → fond normal (resume.css).

* En dessous de 740px → couleur change selon la largeur.

* Cela confirme que les media queries fonctionnent.

On tester en ouvrant les Outils de développement (F12) → mode mobile.



## Question 3 — Adapter la page à une seule colonne sur petits écrans

Pour les tailles d’écran inférieures à 740px, la mise en page est simplifiée :

* Suppression des flottements (float: none) pour que les éléments se réorganisent verticalement.

* Le contenu s’affiche sur une seule colonne (width: 100%).

* L’image du profil se centre automatiquement, et les informations personnelles s’alignent sous le titre.

 Code ajouté :
 ```css
@media only screen and (max-width: 740px) {
  #wrapper {
    width: 100%;
    margin: 0;
    border-radius: 0;
  }

  header {
    display: block;
    text-align: center;
  }

  header img {
    float: none;
    display: block;
    margin: 0 auto;
  }

  #infos ul {
    grid-template-columns: 1fr;
  }
}
```

 Résultat attendu :

En réduisant la largeur de la fenêtre :

* Les sections s’empilent verticalement,

* Le CV devient lisible sans défilement horizontal,

* L’affichage est harmonieux sur tablette et mobile.

## Question 4  — Centarge
```css
@media only screen and (max-width: 740px) {
  section h2 {
    text-align: center;
  }
  ```


## Question 5 — Validation et création du tag responsive

Une fois les ajustements terminés, les fichiers sont validés et versionnés dans Git.

 Commandes utilisées :
   ```bash
git add .
git commit -m "Partie 4 : adaptation responsive du CV"
git tag responsive
  ```


*  Ce tag responsive permet d’identifier la version finale du CV avec design adaptatif.

## Question 6 — Mise en ligne du CV sur GitHub Pages

Le déploiement du site a été fait sur GitHub Pages, car GitLab Pages ne fonctionnait pas correctement sur le serveur universitaire.

 Commandes utilisées :
   ```bash
git push githubssh main --tags
  ```

 Lien de mise en ligne :
 https://medbenaissa1.github.io/tp_cv/


Explication :
  ```txtx
À chaque push sur la branche main, GitHub Pages :

Met à jour automatiquement les fichiers HTML et CSS,

Génère la version en ligne du CV,

Rend accessible la page publique sur le lien ci-dessus.
  ```


## Partie 5 – Micro-données (Schema.org)

###  Objectif
L’objectif de cette partie est d’enrichir la page du CV avec des **micro-données (microdata)** afin de permettre aux moteurs de recherche et aux outils sémantiques (comme Google ou Bing) d’interpréter automatiquement les informations contenues dans le CV : nom, poste, adresse, email, compétences, etc.

Pour cela, le standard **Schema.org** propose des vocabulaires et des propriétés adaptées à chaque type de contenu.  
Dans notre cas, nous avons utilisé le type [`Person`](https://schema.org/Person), qui correspond parfaitement à la structure d’un CV.

---

###  Implémentation dans le code

Les micro-données ont été intégrées directement dans le fichier `ubo-resume.html` en ajoutant les attributs :

- `itemscope` et `itemtype` pour déclarer le type d’objet :  
  ```html
  <div id="wrapper" itemscope itemtype="https://schema.org/Person">
    ```
* itemprop pour chaque propriété sémantique :

```html
<h1 itemprop="name">Ahmed AL KHALIDI</h1>
<h2 itemprop="jobTitle">Développeur Web Senior</h2>
<a href="mailto:ahmed.khalidi@example.com" itemprop="email">ahmed.khalidi@example.com</a>
```
Des sous-types ont également été utilisés :

* PostalAddress pour l’adresse (streetAddress, addressLocality, addressCountry),

* EducationalOrganization pour les formations,

* Organization pour les expériences professionnelles,

* knowsLanguage et knowsAbout pour les langues et compétences.

Toutes ces métadonnées permettent de décrire précisément le profil de la personne.

Validation des micro-données
L’outil utilisé est le validateur officiel de Schema.org :
 https://validator.schema.org/

### L’URL testée est :

* https://medbenaissa1.github.io/tp_cv/ubo-resume.html

Le validateur détecte correctement toutes les propriétés du type Person :

* name, jobTitle, email, address, birthDate, nationality, ainsi que les sous-propriétés comme knowsLanguage, knowsAbout, etc.


💡 Remarque sur la détection automatique
Je pourrais rendre mon fichier CV principal en le renommant simplement :

```bash
mv ubo-resume.html index.html
```
Cela permettrait au validateur Schema.org de détecter automatiquement les micro-données à l’adresse racine :

```bash
https://medbenaissa1.github.io/tp_cv/
```
* Cependant, pour des raisons d’évaluation et de suivi du travail par l’enseignant, le fichier ubo-resume.html a été conservé sous ce nom.
La validation est donc effectuée directement sur :https://medbenaissa1.github.io/tp_cv/ubo-resume.html
et fonctionne parfaitement.

### Conclusion
* Les micro-données enrichissent la page avec des informations sémantiques exploitables par les moteurs de recherche.

* Le type Person est correctement reconnu par le validateur.

* Le choix de garder le fichier ubo-resume.html garantit la conformité avec les consignes du TP.

* Si besoin, le renommage en index.html reste une option simple pour automatiser la détection future.

