const express = require('express');
const router = express.Router();
const rentalDal = require('../services/rental.dal')

router.use(express.static('public'));

router.get('/', (req, res) => {
    res.render('home.ejs')
});

router.get('/store1', async (req, res) => {
    let notReturned = await rentalDal.getNullrentals1();
    if (notReturned.length === 0) {
        res.render('norecord');
    } else {
        res.render('notReturned.ejs', {notReturned})
    }
});

router.get('/store2', async (req, res) => {
    let notReturned2 = await rentalDal.getNullrentals2();
    if (notReturned2.length === 0) {
        res.render('norecord');
    } else {
        res.render('notReturned2.ejs', {notReturned2})
    }
});

module.exports = router