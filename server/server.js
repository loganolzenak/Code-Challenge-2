const express = require( 'express' );
const app = express();
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const jokeRouter = require('./routes/joke.router');
const port = process.env.PORT || 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(express.static('server/public')); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/joke', jokeRouter); 



app.listen(port, function(){
  console.log('server running on: ', port);
}); // end spin up server
