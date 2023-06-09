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
		console.log(typeof arrayT);
		let table = document.getElementById('table');
		for (let i = 0; i < arrayT.length; i++) {
			for (key in arrayT[i]) {
				let tr = document.createElement('tr');
				let td = document.createElement('td');
				td.innerHTML = key;
				tr.appendChild(td);
				for (let j = 0; j < arrayT[i][key].length; j++) {
					let td = document.createElement('td');
					td.innerHTML = arrayT[i][key][j];
					tr.appendChild(td);
				}
				table.children[1].appendChild(tr);
			}
		}
	})
	.catch(error => {
		console.error('Une erreur s\'est produite lors du chargement des données JSON :', error);
	});