const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path =require('path');
//new code
const words =require('./routes/words');

require('dotenv').config();


const app = express();
//NEW CODE
// const db = require('./config/keys').mongoURI;

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established")
})

const wordsRouter = require('./routes/words');

app.use('/words', wordsRouter)

//serve static assests if in production NEW CODE
// if(process.env.NODE_ENV==='production'){
// //set a static folder
// app.use(express.static('dist_project/build'))
app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'dist_project','build','index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port} `);
});