const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port);

app.use(express.static('dist'));

app.get('/', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});