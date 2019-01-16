const express = require ('express');
const app = express();
const Dog = require('./dogModel');

//



app.listen(3000, () => {
    console.log('Server is up and runing');
})