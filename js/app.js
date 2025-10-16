// --- Sélectionne tous les boutons "Détails" ---
const boutons = document.querySelectorAll('.toggle');

// --- Au chargement : enlever l'attribut hidden (sinon scrollHeight = 0) ---
document.querySelectorAll('.details[hidden]').forEach((el) => {
  el.hidden = false;        // retire l'attribut HTML "hidden"
  el.style.display = 'none';// on garde l'élément invisible via CSS
  el.style.height = '0px';
});

// --- Ferme tous les blocs ouverts SAUF éventuellement un bloc à ignorer ---
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

// --- Ouverture progressive (setInterval) ---
function ouvrirProgressivement(bloc) {
  bloc.style.display = 'block';       // rendre visible
  bloc.style.overflow = 'hidden';
  // partir de 0 pour une anim fluide
  let h = Math.max(0, parseInt(bloc.style.height, 10) || 0);
  const cible = bloc.scrollHeight;    // hauteur réelle du contenu
  // petit pas d'animation (px par tick)
  const pas = Math.ceil(cible / 15);  // ~15 étapes

  const id = setInterval(() => {
    h += pas;
    if (h >= cible) {
      h = cible;
      clearInterval(id);
    }
    bloc.style.height = h + 'px';
  }, 16); // ~60 FPS

  bloc.classList.add('open');
}

// --- Fermeture progressive (setInterval) ---
function fermerProgressivement(bloc) {
  let h = bloc.scrollHeight;
  const pas = Math.ceil(Math.max(10, h / 15)); // pas minimum pour finir l'anim
  const id = setInterval(() => {
    h -= pas;
    if (h <= 0) {
      h = 0;
      clearInterval(id);
      bloc.style.display = 'none';   // totalement masqué une fois replié
    }
    bloc.style.height = h + 'px';
  }, 16);

  bloc.classList.remove('open');
}

// --- Gestion du clic ---
function gererClic(bouton) {
  const bloc = bouton.nextElementSibling; // <div class="details">
  const estOuvert = bloc.classList.contains('open');

  // Fermer tous les autres
  fermerTous(estOuvert ? null : bloc);

  if (estOuvert) {
    // fermer celui-ci
    fermerProgressivement(bloc);
    bouton.setAttribute('aria-expanded', 'false');
    bouton.textContent = 'Détails';
  } else {
    // ouvrir celui-ci
    ouvrirProgressivement(bloc);
    bouton.setAttribute('aria-expanded', 'true');
    bouton.textContent = 'Fermer';
  }
}

// --- Init : brancher les écouteurs ---
function init() {
  boutons.forEach((btn) => {
    btn.addEventListener('click', () => gererClic(btn));
  });
}

init();
