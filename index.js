var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var querystring = require('querystring');
var path = require('path');


app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname + '/public')));

// views is directory for all template files

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  	   console.log('Node app is running on port', app.get('port'));
});
// mongoose.connect(process.env.MONGODB_URI, function(err){
// 	if (err) throw err;
// 	console.log('Database connected');

// });


// mongoose.connect(process.env.MONGODB_URI ,function(err){
//   if(err) throw err;
//   console.log('Database connected');
//   app.listen(app.get('port'), function() {
//     console.log('Node app is running on port', app.get('port'));
//   });
// });

// var db = mongoose.connection;

// var eventSchema = mongoose.Schema({
//   title: String,
//   description: String, 
//   category: String,
//   date: String
// });
// var Event = mongoose.model('events', eventSchema);

// app.post("/sendEvents", function(req, res) {
//   var event = req.body;
//   if (!req.body) {
//     handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
//   }

//   var newEvent = new Event({
//     title: event.title,
//     description: event.description, 
//     category: event.category,
//     date: event.date
//   });

//   newEvent.save(function(err, doc){
//     if (err) {
//       handleError(res, err.message, "Failed to create new contact.");
//     } else {
//       res.status(201).json(doc);
//     }
//   });
//   console.log(newEvent);
// });

// app.get("/getEvents", function(req, res){

//   Event.find().lean().exec(function(err, events){
//     return res.end(JSON.stringify(events));
//   })

// });


// app.get('/db', function (request, response) {
//   mongo.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('SELECT * FROM test_table', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     });
//   });
// });
