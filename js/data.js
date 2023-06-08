// Charger les données des fichiers JSON A et B
const jsonA = '[{"redshift": 0.8182060549, "valeur": 10}, {"redshift": 1.383214796, "valeur": 20}]';
const jsonB = '[{"redshift": 0.8182060549, "valeur": 12}, {"redshift": 1.383214796, "valeur": 18}]';

const objetsA = JSON.parse(jsonA);
const objetsB = JSON.parse(jsonB);

// Tableau pour stocker les différences
const differences = [];

// Parcourir les objets du fichier JSON A
for (const objetA of objetsA) {
  const redshift = objetA.redshift;

  // Rechercher l'objet correspondant dans le fichier JSON B
  const objetB = objetsB.find((objet) => objet.redshift === redshift);

  if (objetB) {
    // Effectuer la comparaison et calculer les différences
    const difference = {
      redshift: redshift,
        difference: Math.abs((objetA.valeur - objetB.valeur)) / objetB.valeur
    };

    // Stocker la différence dans le tableau
    differences.push(difference);
  }
}

// Générer un nouveau JSON à partir du tableau de différences
const nouveauJSON = JSON.stringify(differences);

// Sélectionner la div par son ID
const resultatDiv = document.getElementById('resultat');

// Mettre à jour le contenu de la div avec le nouveau JSON
resultatDiv.textContent = nouveauJSON;
// resultatDiv.textContent = nouveauJSON;
