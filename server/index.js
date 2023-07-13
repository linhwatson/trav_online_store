const express = require('express');
const bodyParser = require('body-parser');
const csvToJson = require('csvtojson');

// const csvFile = require('../product_list.csv');
// const json = csvToJson().fromFile(csvFile);
// console.log(json);
// const jsonString = JSON.stringify(json, null, 2)
// console.log(jsonString);

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 3000;

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

/* ==================== MIDDLEWARES HERE =========================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/* ==================== SET UP ROUTES HERE ========================= */
app.use('/', (req, res) => res.send('Server is running!'));
