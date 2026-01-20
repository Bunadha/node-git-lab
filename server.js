const express = require('express');
const app = express();

app.post('/login', (req, res) => {
    res.send('Hello Git Workshop!');
});

app.listen(3000, () => console.log('Run!'));

