// 1. Sélectionner tous les boutons de type "Détails"
const buttons = document.querySelectorAll('.toggle');

// 2. Parcourir chaque bouton
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Trouver le bloc .details juste en dessous du bouton
    const details = btn.nextElementSibling;

    // Vérifier s’il est ouvert
    const isOpen = details.classList.contains('open');

    // Fermer tous les autres
    document.querySelectorAll('.details.open').forEach((d) => {
      d.classList.remove('open');
      d.hidden = true;
      const otherBtn = d.previousElementSibling;
      otherBtn.setAttribute('aria-expanded', 'false');
    });

    // Si déjà ouvert → on le ferme
    if (isOpen) {
      details.classList.remove('open');
      details.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      // Sinon on l’ouvre
      details.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      details.classList.add('open');
    }
  });
});
