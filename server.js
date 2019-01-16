const express = require ('express');
const app = express();
const Dog = require('./dogModels');

// index route
app.get('/dog', (req, res) => {
    // res.send(Dog);
    res.render('index.ejs', {
        dogArray: Dog
    });
});



app.listen(3000, () => {
    console.log('Server is up and runing');
})