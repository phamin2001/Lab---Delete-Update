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
    res.redirect('/dog');
});

router.put('/:id', (req, res) => {
    if(req.body.eatMeet === 'on') {
        req.body.eatMeet = true;
    } else {
        req.body.eatMeet = false;
    }
    Dogs[req.params.id] = req.body;
    res.redirect('/dog');
});

// show route
router.get('/:id', (req, res) => {
    res.render('show.ejs' , {
        singleDog: Dogs[req.params.id],
        id: req.params.id                                                                
    });
   
});


// edit route
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        singleDog:Dogs[req.params.id],
        id: req.params.id
    });
});

module.exports = router;