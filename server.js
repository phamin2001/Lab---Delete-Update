const express = require ('express');
const app = express();
const methodOverride = require('method-override');

const dogController = require('./controllers/dogCont');

app.use(methodOverride('_method'));
app.use('/dog', dogController);





app.listen(3000, () => {
    console.log('Server is up and runing');
})