# 🧠 TP : Création d’un CV en HTML / CSS

## 🎯 Objectif général
L’objectif de ce TP est de créer une page web contenant un exemple de **CV** en utilisant les technologies **HTML** et **CSS**.  
À la fin du TP, la version finale du CV sera mise en ligne et le code source sera déposé sur **GitLab**, avec des commits réguliers à chaque étape.

---

## 🧩 Étape 1 – Structure HTML de base

### 📝 Objectif
Créer la structure de base d’un document HTML pour la page du CV.  
Le but est d’obtenir un CV **structuré mais sans mise en forme**, afin de comprendre la sémantique et la hiérarchie du document HTML.

---

### 📂 Fichier concerné
- **Nom du fichier :** `ubo-resume.html`

---

### 💻 Code utilisé

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
🧠 Explications du code
🔹 <!DOCTYPE html>

Indique que le document utilise la norme HTML5.

🔹 <html lang="fr">

Définit la langue principale du document comme étant le français.

🔹 <meta charset="utf-8">

Permet l’utilisation correcte des caractères accentués et symboles.

🔹 <title>

Affiche le titre de la page dans l’onglet du navigateur (ici : “Mon CV”).

🔹 Balises <meta>

description : courte description du contenu de la page.

keywords : mots-clés utiles pour le référencement.

author : nom de l’auteur du document.

viewport : rend la page responsive, adaptée aux écrans mobiles.

🔹 <div id="wrapper">

Crée un conteneur principal pour regrouper tout le contenu du CV (en-tête, profil, formation, expériences, etc.).
Pour l’instant, il est vide.

🔍 Vérification du résultat

Pour visualiser le fichier HTML dans le navigateur :

Clic droit sur le fichier ubo-resume.html → “Open with Live Server”.

Le navigateur s’ouvre sur :
http://127.0.0.1:5500/ubo-resume.html

La page s’affiche (vide, c’est normal à cette étape).

💾 Commit GitLab

Une fois cette étape validée, on enregistre le travail :

git add ubo-resume.html readme.md
git commit -m "Étape 1 : structure HTML de base du CV"
git push
