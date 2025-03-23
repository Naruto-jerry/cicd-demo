const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, This is Jagruti CI/CD World!');
});

app.get('/greeting', (req, res) => {
    res.send('Welcome ! just learning CI/CD pipelines, so lets gooo');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});