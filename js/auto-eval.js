// ==========================
// Auto-évaluation : étoiles + histogramme
// ==========================

async function chargerCompetences() {
  try {
    const reponse = await fetch('data/competences.json');
    const data = await reponse.json();

    afficherEtoiles(data);
    afficherHistogramme(data);

  } catch (err) {
    console.error("Erreur lors du chargement du fichier JSON :", err);
  }
}

// --- 1. Affichage des étoiles ---
function afficherEtoiles(data) {
  const container = document.getElementById('liste-competences');
  container.innerHTML = '';

  for (const categorie in data) {
    const section = document.createElement('div');
    section.className = 'categorie';
    section.innerHTML = `<h3>${categorie}</h3>`;

    data[categorie].forEach(comp => {
      const ligne = document.createElement('div');
      ligne.className = 'ligne-competence';

      const nom = document.createElement('span');
      nom.textContent = comp.nom;

      const etoiles = document.createElement('span');
      etoiles.className = 'etoiles';
      etoiles.innerHTML = genererEtoiles(comp.niveau);

      ligne.appendChild(nom);
      ligne.appendChild(etoiles);
      section.appendChild(ligne);
    });

    container.appendChild(section);
  }
}

// --- 2. Génération des étoiles ---
function genererEtoiles(nb) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += i <= nb ? '⭐' : '☆';
  }
  return html;
}

// --- 3. Affichage de l’histogramme avec Canvas ---
function afficherHistogramme(data) {
  const canvas = document.getElementById('graphiqueCompetences');
  const ctx = canvas.getContext('2d');

  const competences = data.langages; // tu peux aussi combiner toutes les catégories
  const barWidth = 80;
  const barSpacing = 20;
  const xStart = 50;
  const yBase = 250;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Titre
  ctx.font = '16px Arial';
  ctx.fillText('Niveau de maîtrise (1 à 5)', 10, 20);

  competences.forEach((comp, index) => {
    const hauteur = comp.niveau * 40;
    const x = xStart + index * (barWidth + barSpacing);
    const y = yBase - hauteur;

    // Barre
    ctx.fillStyle = '#0e7490';
    ctx.fillRect(x, y, barWidth, hauteur);

    // Nom
    ctx.fillStyle = '#222';
    ctx.font = '14px Arial';
    ctx.fillText(comp.nom, x + 10, yBase + 20);

    // Valeur numérique
    ctx.fillText(comp.niveau, x + 30, y - 10);
  });
}

document.addEventListener('DOMContentLoaded', chargerCompetences);
