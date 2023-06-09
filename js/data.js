async function loadJSON(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

const urlJSONA = './data/221410_A.json';
const urlJSONB = './data/221410_B.json';

const dataA = loadJSON(urlJSONA);
const dataB = loadJSON(urlJSONB);

Promise.all([dataA, dataB])
.then(([arrayA, arrayB]) => {
		const arrayT = [];

		for (const objectA of arrayA) {
			const objectB = arrayB.find((el) => el["Rank"] === objectA["Rank"]);
			if (objectB) {
				const result = [];
				for (const key in objectA) {
					if (key == "Redshift" || key == "Rank")
						treshold = objectA[key];
					else
						treshold = (Math.round(Math.abs(objectA[key] - objectB[key]) / objectB[key] * 100 * 100) / 100);
					
					result[key] = [objectA[key], objectB[key], treshold];
				}
				arrayT.push(result);
			}
		}
		console.log(arrayT)
	})
	.catch(error => {
		console.error('Une erreur s\'est produite lors du chargement des données JSON :', error);
	});