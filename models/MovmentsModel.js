var mongoose = require('mongoose');

//Ett "schema" över hur varje dokument ska se ut
var BilSchema = new mongoose.Schema({

    titel:String,
    regi:String,
    poster:String,
    releaseYear:Number
},
{
//Vart vi hittar datan i databasen
collection: 'filmer'
});

//exporterar schemat och filen
module.exports = mongoose.model('BilModel', BilSchema);