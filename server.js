const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.send('User List');
});

app.listen(3000, () => console.log('Run!'));

