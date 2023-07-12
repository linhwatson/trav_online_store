const express = require('express');

const app = express();

/* ==================== SET UP ROUTES HERE ========================= */
app.get('/', (req, res) => res.send('Server is running!'));


/* ==================== PORT LISTENING HERE ======================== */
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
