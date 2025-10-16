// =======================
// TP – JavaScript : Apparition progressive + Tooltips
// =======================

// --- Sélectionne tous les boutons "Détails" ---
const boutons = document.querySelectorAll('.toggle');

// --- Au chargement : retire l'attribut hidden sinon scrollHeight = 0 ---
document.querySelectorAll('.details[hidden]').forEach((el) => {
  el.hidden = false;          // retire l'attribut HTML "hidden"
  el.style.display = 'none';  // cache via CSS
  el.style.height = '0px';    // initialise la hauteur à 0
});

// ============================
// Fonctions pour les expériences
// ============================

// --- Ferme tous les blocs ouverts SAUF un éventuel bloc à ignorer ---
function fermerTous(ignorer = null) {
  document.querySelectorAll('.details').forEach((bloc) => {
    if (bloc !== ignorer) {
      fermerProgressivement(bloc);
      const btn = bloc.previousElementSibling;
      if (btn?.classList?.contains('toggle')) {
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Détails';
      }
    }
  });
}

// --- Ouverture progressive avec setInterval ---
function ouvrirProgressivement(bloc) {
  bloc.style.display = 'block';       // visible
  bloc.style.overflow = 'hidden';
  let h = bloc.offsetHeight || 0;     // hauteur actuelle
  const cible = bloc.scrollHeight;    // hauteur finale
  const pas = Math.ceil(cible / 15);  // incrément progressif

  const id = setInterval(() => {
    h += pas;
    if (h >= cible) {
      h = cible;
      clearInterval(id);
    }
    bloc.style.height = h + 'px';
  }, 16); // environ 60 FPS

  bloc.classList.add('open');
}

// --- Fermeture progressive avec setInterval ---
function fermerProgressivement(bloc) {
  let h = bloc.scrollHeight;
  const pas = Math.ceil(Math.max(10, h / 15));
  const id = setInterval(() => {
    h -= pas;
    if (h <= 0) {
      h = 0;
      clearInterval(id);
      bloc.style.display = 'none';
    }
    bloc.style.height = h + 'px';
  }, 16);

  bloc.classList.remove('open');
}

// --- Gère le clic sur un bouton "Détails" ---
function gererClic(bouton) {
  const bloc = bouton.nextElementSibling;
  const estOuvert = bloc.classList.contains('open');

  fermerTous(estOuvert ? null : bloc); // ferme les autres

  if (estOuvert) {
    fermerProgressivement(bloc);
    bouton.setAttribute('aria-expanded', 'false');
    bouton.textContent = 'Détails';
  } else {
    ouvrirProgressivement(bloc);
    bouton.setAttribute('aria-expanded', 'true');
    bouton.textContent = 'Fermer';
  }
}

// --- Initialise les événements des boutons ---
function initBoutons() {
  boutons.forEach((btn) => {
    btn.addEventListener('click', () => gererClic(btn));
  });
}

// ============================
// Fonctions pour les tooltips (compétences)
// ============================

function initTooltips() {
  const skills = document.querySelectorAll('.skill');
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  // --- Survol de chaque compétence ---
  skills.forEach((skill) => {
    skill.addEventListener('mouseenter', (e) => {
      const text = skill.getAttribute('data-description');
      tooltip.textContent = text;
      tooltip.style.opacity = '1';
      tooltip.style.display = 'block';
      positionTooltip(e);
    });

    skill.addEventListener('mousemove', (e) => {
      positionTooltip(e);
    });

    skill.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
      tooltip.style.display = 'none';
    });
  });

  // --- Suivi du curseur ---
  function positionTooltip(e) {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  }
}

// ============================
// Initialisation globale
// ============================

document.addEventListener('DOMContentLoaded', () => {
  initBoutons();
  initTooltips();
});

