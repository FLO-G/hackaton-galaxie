// Fonction pour charger les données JSON à partir d'une URL
async function chargerJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Charger les données du fichier JSON A
const urlJSONA = './data/221410_A.json';
const donneesA = chargerJSON(urlJSONA);

// Charger les données du fichier JSON B
const urlJSONB = './data/221410_B.json';
const donneesB = chargerJSON(urlJSONB);

// Utiliser les données récupérées
Promise.all([donneesA, donneesB])
  .then(([dataA, dataB]) => {
    // Effectuer les comparaisons et générer le nouveau JSON
      const differences = [];

    // Parcourir les objets du fichier JSON A
    for (const objetA of dataA) {
        const redshift = objetA["Redshift"];
        console.log(objetA);

      // Rechercher l'objet correspondant dans le fichier JSON B
      const objetB = dataB.find((objet) => objet["Redshift"] === redshift);
        console.log(objetB);
        if (objetB) {
            let difference;
            objetA.forEach(element => {
                // Effectuer la comparaison et calculer les différences
                difference = {
                  redshift: redshift,
                  difference: Math.abs((element - objetB[element])) / objetB[element]
                };
        
                // Stocker la différence dans le tableau
                differences.push(difference); 
            });

        }
    }
    // Générer un nouveau JSON à partir du tableau de différences
    const nouveauJSON = JSON.stringify(differences);

    // Sélectionner la div par son ID
    const resultatDiv = document.getElementById('resultat');

    // Mettre à jour le contenu de la div avec le nouveau JSON
    resultatDiv.textContent = nouveauJSON;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors du chargement des données JSON :', error);
  });