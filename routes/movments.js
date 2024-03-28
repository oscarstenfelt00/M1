const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const MovmentsModel = require('../models/MovmentsModel.js');

//req och res här är request- respektive response-objekten
router.get('/', function(req, res, next) {

//find är Mongoose funktion.
   MovmentsModel.find().then(function(movments) {

//Om det inte uppstår fel så skicka bilarna i jsonformat
   res.json(movments);
   });

});
//req och res här är request- respektive response-objekten
router.get('/:id', function(req, res, next) {

//find är Mongoose funktion.
   MovmentsModel.findById(req.params.id, req.body).then(function(movments) {

//Om det inte uppstår fel så skicka bilarna i jsonformat
   res.json(movments);
   });

});

router.post('/', function(req, res, next) {
   //req.body är innehållet i requestobjektet, dvs en json med en bil
   MovmentsModel.create(req.body).then(function(post) {
       res.json(post); //Här skickar vi tillbaka datan vi skickar in i databasen, om skrivningen gick bra
   }); 
 });

 //Hittar posten med det unika id
 router.delete('/:id', function(req, res, next) {
   MovmentsModel.findByIdAndDelete(req.params.id, req.body).then(function(post) {
   res.json(post); //Här skickar vi tillbaka datan vi tog bort ur databasen om det gick bra 
   });
});

 //Hittar posten med det unika id och uppdatar
 router.post('/:id', function(req, res, next) {
   MovmentsModel.findByIdAndUpdate(req.params.id, req.body).then(function(post) {
   res.json(post); //Här skickar vi tillbaka den datan vi uppdaterade om skrivningen gick bra
   });
});


module.exports = router;