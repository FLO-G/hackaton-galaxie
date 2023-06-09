// // const array1 = {
// //   a: 'hello',
// //   b: '42',
// //   c: 'false'
// // };
// async function test(){

//   async function loadJSON(url) {
//     const response = await fetch(url);
//     data =   response.json();
//     return data;
//   }
  
//   const urlJSONA = './data/221410_A.json';
//   const array1 = await loadJSON(urlJSONA);

// console.log(array1)

// const keys = Object.keys(array1);
// const tableData = [];


// keys.forEach((key) => {
//   const rowData = {
//     key: key,
//     value: array1[key]
//   };
//   tableData.push(rowData);
// });

// // Utilisez le tableau tableData pour créer le tableau Tabulator
// const table = new Tabulator("#example-table", {
//   data: tableData,
//   layout: "fitColumns",
//   columns: [
//     { title: "Name", field: "ContinuumAmplitude" },
//     { title: "Data A", field: "value" }
//   ]
// });
// }
// test().then(() => console.log("coucou"))