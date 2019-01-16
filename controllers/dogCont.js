const express  = require('express');
const router = express.Router();
const Dogs = require('../models/dogModels');




// index route
router.get('/', (req, res) => {
    // res.send(Dog);
    res.render('index.ejs', {
        dogArray: Dogs
    });
});

// delete route
router.delete('/:id', (req, res) => {
    Dogs.splice(req.params.id, 1);
    console.log(Dogs);
    res.redirect('/dog');
});



module.exports = router;