const express = require('express');
const app = express();

app.get('/product', (req, res) => {
    res.send('Product List!');
});

app.listen(3000, () => console.log('Run!'));

