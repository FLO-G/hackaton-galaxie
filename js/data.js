// // Fonction pour charger les données JSON à partir d'une URL
// async function chargerJSON(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// // Charger les données du fichier JSON A
// const urlJSONA = './data/221410_A.json';
// const donneesA = chargerJSON(urlJSONA);

// // Charger les données du fichier JSON B
// const urlJSONB = './data/221410_B.json';
// const donneesB = chargerJSON(urlJSONB);

// // Utiliser les données récupérées
// Promise.all([donneesA, donneesB])
//   .then(([dataA, dataB]) => {
//     // Effectuer les comparaisons et générer le nouveau JSON
//     const differences = [];

//     // Parcourir les objets du fichier JSON A
//     for (const objetA of dataA) {
//       const redshift = objetA["Redshift"];

//       // Rechercher l'objet correspondant dans le fichier JSON B
//       const objetB = dataB.find((objet) => objet["Redshift"] === redshift);

//       if (objetB) {
//         const difference = {};

//         // Parcourir les propriétés de l'objetA
//         for (const key in objetA) {
//           if (objetB.hasOwnProperty(key)) {
//             const valueA = objetA[key];
//             const valueB = objetB[key];

//             // Effectuer la comparaison et calculer la différence
//             difference[key] = Math.abs((valueA - valueB)) / valueB;
//           }
//         }

//         // Stocker la différence dans le tableau
//         differences.push(difference);
//       }
//     }

//     // Générer un nouveau JSON à partir du tableau de différences
//     const nouveauJSON = JSON.stringify(differences);

//     // Sélectionner la div par son ID
//     const resultatDiv = document.getElementById('resultat');

//     // Mettre à jour le contenu de la div avec le nouveau JSON
//     resultatDiv.textContent = nouveauJSON;
//   })
//   .catch(error => {
//     console.error("Une erreur s'est produite lors du chargement des données JSON :", error);
//   });


// // const array1 = {
// //   a: 'hello',
// //   b: '42',
// //   c: 'false'
// // };
// // async function test(){

// //   async function loadJSON(url) {
// //     const response = await fetch(url);
// //     data =   response.json();
// //     return data;
// //   }
  
// //   const urlJSONA = './data/221410_A.json';
// // const array1 = await loadJSON(urlJSONA);

// // console.log(array1)

// // const keys = Object.keys(array1);
// // const tableData = [];


// // keys.forEach((key) => {
// //   const rowData = {
// //     key: key,
// //     value: array1[key]
// //   };
// //   tableData.push(rowData);
// // });

// // // Utilisez le tableau tableData pour créer le tableau Tabulator
// // const table = new Tabulator("#example-table", {
// //   data: tableData,
// //   layout: "fitColumns",
// //   columns: [
// //     { title: "Name", field: "key" },
// //     { title: "Data A", field: "value" }
// //   ]
// // });
// // }
// // test().then(() => console.log("coucou"))
