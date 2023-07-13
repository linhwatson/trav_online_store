const express = require('express');
const bodyParser = require('body-parser');
const { getItems, getItem } = require('./controllers');

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
// app.use('/', (req, res) => res.send('Server is running!'));

app.get('/', (req, res) => res.send('Server running'))
app.get('/details', getItems);
app.get('/details/:id', getItem);
