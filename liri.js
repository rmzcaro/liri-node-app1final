require("dotenv").config();

// store keys 
var myKeys =  require("./keys.js");

console.log(myKeys);

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");


var client = new Twitter(myKeys.twitter);
var spotify = new Spotify(myKeys.spotify);


// Make it where liri takes in the command `my-tweets`
// show last 20 tweets and when they were created
// GET statuses/ lookup
client.get("statuses/user_timeline", function(error, tweets, response){
    if(error) throw error;
for (let i = 0; i < 3; i++) {
        console.log(tweets[i].text);
}

})

//  #2 `node liri.js spotify-this-song '<song name here>'`would show the info of 
// artist, song name, preview link, album where song is from
// if no song, program will default to "the Sign" by Ace of Base

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
    } else {
        // console.log(data.tracks.items[0]);
        console.log(data.tracks.items[0].artists[0].name);
    }
 
    // Do something with 'data' 
});




// #3 `node liri.js movie-this '<movie name here>'`
// The following will show on terminal:
//  * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

// if user doesn't type in a movie, the program will output data fro 
// "Mr Nobody"

// function omdbData(movie){
//     var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';
//     request(omdbURL, function (error, response, body){
//       if(!error && response.statusCode == 200){
//         var body = JSON.parse(body);
//         console.log("Title: " + body.Title);
//         console.log("Release Year: " + body.Year);
//         console.log("IMdB Rating: " + body.imdbRating);
//         console.log("Country: " + body.Country);
//         console.log("Language: " + body.Language);
//         console.log("Plot: " + body.Plot);
//         console.log("Actors: " + body.Actors);
//         console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
//         console.log("Rotten Tomatoes URL: " + body.tomatoURL);
//       } else{
//         console.log("There was an error, no data can be returned.")
//       }


// #4  `node liri.js do-what-it-says`
// using the "fs" node package, liri will take text from random.txt
// and use it to call one of Liri's commands
// var fs = require('fs');

// it should run `spotify-this-song` for I want it that way

