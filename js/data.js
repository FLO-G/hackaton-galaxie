async function loadJSON(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

function customFormatter(cell) {
	let value = cell.getValue();

	if (value > 100)
		cell.getElement().style.backgroundColor = "red";
	else if (value <= 0 && cell.getField != "Rank") {
		table.hideColumn(cell.getField()); //Bug
	}
	return value;
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
				const result = {};
				for (const key in objectA) {
					if (key == "Redshift" || key == "Rank")
						result[key] = objectA[key];
					else
						result[key] = (Math.round(Math.abs(objectA[key] - objectB[key]) / objectB[key] * 100 * 100) / 100);
				}
				arrayT.push(result);
			}
		}

		table = new Tabulator("#resultat", {
			data: arrayT,
			movableColumns: true,
			columns: [
				{ title: "Rank", field: "Rank", formatter: customFormatter },
				{ title: "Redshift", field: "Redshift", formatter: customFormatter },
				{ title: "ContinuumAmplitude", field: "ContinuumAmplitude", formatter: customFormatter },
				{ title: "ContinuumAmplitudeUncertainty", field: "ContinuumAmplitudeUncertainty", formatter: customFormatter },
				{ title: "ContinuumIgmIndex", field: "ContinuumIgmIndex", formatter: customFormatter },
				{ title: "ContinuumIsmCoeff", field: "ContinuumIsmCoeff", formatter: customFormatter },
				{ title: "ContinuumName", field: "ContinuumName", formatter: customFormatter },
				{ title: "LeastSquare", field: "LeastSquare", formatter: customFormatter },
				{ title: "LinesRatioAmplitudeAbs", field: "LinesRatioAmplitudeAbs", formatter: customFormatter },
				{ title: "LinesRatioAmplitudeEm", field: "LinesRatioAmplitudeEm", formatter: customFormatter },
				{ title: "LinesRatioIsmCoeff", field: "LinesRatioIsmCoeff", formatter: customFormatter },
				{ title: "LinesRatioName", field: "LinesRatioName", formatter: customFormatter },
				{ title: "RedshiftLogProbaDensity", field: "RedshiftLogProbaDensity", formatter: customFormatter },
				{ title: "RedshiftProba", field: "RedshiftProba", formatter: customFormatter },
				{ title: "RedshiftProbaZmax", field: "RedshiftProbaZmax", formatter: customFormatter },
				{ title: "RedshiftProbaZmin", field: "RedshiftProbaZmin", formatter: customFormatter },
				{ title: "RedshiftUncertainty", field: "RedshiftUncertainty", formatter: customFormatter },
				{ title: "StrongEmissionLinesSNR", field: "StrongEmissionLinesSNR", formatter: customFormatter },
				{ title: "SubType", field: "SubType", formatter: customFormatter },
				{ title: "VelocityAbsorption", field: "VelocityAbsorption", formatter: customFormatter },
				{ title: "VelocityEmission", field: "VelocityEmission", formatter: customFormatter },
				{ title: "abs_deltaZ", field: "abs_deltaZ", formatter: customFormatter },
				{ title: "lfHa", field: "lfHa", formatter: customFormatter },
				{ title: "lfOII", field: "lfOII", formatter: customFormatter },
				{ title: "snrHa", field: "snrHa", formatter: customFormatter },
				{ title: "snrOII", field: "snrOII", formatter: customFormatter },
			]
		})
		console.log(table)
	})
	.catch(error => {
		console.error('Une erreur s\'est produite lors du chargement des données JSON :', error);
	});