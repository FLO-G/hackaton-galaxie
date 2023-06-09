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
		initSelector(arrayT);
	})
	.catch(error => {
		console.error('Une erreur s\'est produite lors du chargement des données JSON :', error);
	});

	function initSelector(array) {
	let selector = document.getElementById('selector');
	
	for (let i = 0; i < array.length; i++) {
		let option = document.createElement('option');
		option.innerHTML = `${array[i]["Rank"][0]}: ${array[i]["Redshift"][0]}`;
		option.setAttribute('id', "rank" + i);
		selector.appendChild(option);
	}
	
	selector.addEventListener('change', () => {
		let index = selector.selectedIndex;
		
		displayArray(index - 1, array);
		parseTable();
	});
}

function displayArray(index, array) {
	let table = document.getElementById('table');
	table.children[1].innerText = "";
	for (key in array[index]) {
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		td.innerHTML = key;
		tr.appendChild(td);
		for (let j = 0; j < array[index][key].length; j++) {
			let td = document.createElement('td');
			td.innerHTML = array[index][key][j];
			tr.appendChild(td);
		}
		table.children[1].appendChild(tr);
	}
}

function parseTable() {
	let tbody = document.getElementById('table').children[1];

	for(let i = 0; i < tbody.childElementCount; i++) {
		if (tbody.children[i].lastElementChild.innerHTML == "0" || tbody.children[i].lastElementChild.innerHTML == "NaN") {
			tbody.children[i].remove();
			i--;
		}
	}
}