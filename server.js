const express = require ('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const dogController = require('./controllers/dogCont');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/dog', dogController);





app.listen(3000, () => {
    console.log('Server is up and runing');
})