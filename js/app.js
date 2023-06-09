const data = [
  {
    "ContinuumAmplitude": 4.010331395e-18,
    "ContinuumAmplitudeUncertainty": 6.56835958e-20,
    "ContinuumIgmIndex": -1.0,
    "ContinuumIsmCoeff": 0.3,
    "ContinuumName": "ssp_25Myr_z008.dat",
    "LeastSquare": 9631.0757555705,
    "LinesRatioAmplitudeAbs": null,
    "LinesRatioAmplitudeEm": 0.0390514984,
    "LinesRatioIsmCoeff": 0.2,
    "LinesRatioName": "tpl_COMBINE-ave-Lya-emstr-AND-StarBurst1_TF_catalog",
    "Rank": 0,
    "Redshift": 0.8182060549,
    "RedshiftLogProbaDensity": 8.6124900394,
    "RedshiftProba": 1.0,
    "RedshiftProbaZmax": 0.8183878846,
    "RedshiftProbaZmin": 0.8180242434,
    "RedshiftUncertainty": 2.62137e-05,
    "StrongEmissionLinesSNR": 155.2225563209,
    "SubType": "Lya_em_SB1",
    "VelocityAbsorption": 150.0,
    "VelocityEmission": 10.0,
    "abs_deltaZ": 6.0627e-06,
    "lfHa": -15.8362358105,
    "lfOII": -16.0158742307,
    "snrHa": 34.4355470852,
    "snrOII": 24.6779130757
  },
  // ... Autres objets de données
];

const tableData = Object.entries(data[0]).map(([key, value]) => {
  const rowData = { Field: key };
  data.forEach((obj, index) => {
    rowData[`Object ${index + 1}`] = obj[key];
  });
  return rowData;
});

const table = new Tabulator("#example-table", {
  data: tableData,
  layout: "fitColumns",
  columns: [
    { title: "Field", field: "Field" },
    // Dynamically generate columns for each object in the data array
    ...data.map((_, index) => ({
      title: `Object ${index + 1}`,
      field: `Object ${index + 1}`,
    })),
  ],
});