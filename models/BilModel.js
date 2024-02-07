var mongoose = require('mongoose');

//Ett "schema" över hur varje dokument ska se ut
var BilSchema = new mongoose.Schema({

    reg:String,
    marke:String,
    modell:String,
    drivmedel:String,
    farg:String,
    kaross:String

},
{
//Vart vi hittar datan i databasen
collection: 'bilar'
});

//exporterar schemat och filen
module.exports = mongoose.model('BilModel', BilSchema);