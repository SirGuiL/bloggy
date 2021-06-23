const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.status(200).send('Hello world!');
});

app.listen(port, () => {
    console.log(`API is Running on https://localhost:${port}`);
});