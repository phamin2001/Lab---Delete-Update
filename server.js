const express = require ('express');
const app = express();
const Dog = require('./dogModels');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// index route
app.get('/dog', (req, res) => {
    // res.send(Dog);
    res.render('index.ejs', {
        dogArray: Dog
    });
});

// delete route
app.delete('/dog/:id', (req, res) => {
   
    Dog.splice(req.params.id, 1);
    console.log(Dog);
    res.redirect('/dog');

});



app.listen(3000, () => {
    console.log('Server is up and runing');
})