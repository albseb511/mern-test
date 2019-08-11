const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items= require('./routes/api/items');

const app = express();

//BodyParser middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongoose 
mongoose
    .connect(db)
    .then(()=>console.log('Mongose DB connected'))
    .catch(err=>console.log(err))

//use routes
app.use('/api/items', items);

//Port
const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server started on port ${port} `));