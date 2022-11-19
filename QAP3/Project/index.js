const express = require('express');
const app = express();
const lateRentalsrouter = require('./routes/laterentals')
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

app.set('view engine', 'ejs');

app.use('/', lateRentalsrouter);

app.use((req, res) => {
    res.status(404).render('404')
})