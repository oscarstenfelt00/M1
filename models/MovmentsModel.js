var mongoose = require('mongoose');

//Ett "schema" över hur varje dokument ska se ut
var BilSchema = new mongoose.Schema({

    Movment:String,
    PrimaryMuscles:String,
    Instructions:String
},
{
//Vart vi hittar datan i databasen
collection: 'movments'
});

//exporterar schemat och filen
module.exports = mongoose.model('BilModel', BilSchema);