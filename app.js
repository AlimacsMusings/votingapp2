var database = require('./app/database.js');
var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors());

var counter = 1;
/**
  poll
  {_id :   1  ,
    pollname : 'Best Star Trek captain',
   options : [
              { name : Jean Luc Picard, votes : 0 },
              { name : James T Kirk, votes : 0},
              { name : Kathrine Janeway, votes: 300}
 ]}



*/

var createPoll = function() {
  var poll =   {id : counter , name : 'Best Star Trek captain',
     options : [
                { name : 'Jean Luc Picard', votes : 49 },
                { name : 'James T Kirk', votes : 4},
                { name : 'Kathrine Janeway', votes: 83}
   ]};
  counter++;
  database.save(poll);

}

var getAllPolls = function(res) {

  var result = [];
  database.getAllPolls(function(result){
     //console.log("Result is " + JSON.stringify(result));
     console.log("Sending result....");
     res.json(result);
  });

}

var getOnePoll = function(id, res) {
  var result = [];
  database.getOnePoll(id, function(result) {
    res.json(result);
  });
}


//Update one poll - pollID, itemName, add vote
app.get('/polls/vote/:query', function(req, res, next) {
  var q = req.params.query;
  var pollid = req.query.id;
  var itemName = req.query.name;

  // Method to - get poll item vote.  Add 1 and update
  if(pollid!==null && pollid !== undefined) {
    getOnePoll(parseInt(pollid), res);
  }
});

//Get one poll
app.get('/polls/:query', function(req, res, next) {
  var q = req.params.query;
  var pollid = req.query.id;

  if(pollid!==null && pollid !== undefined) {
    getOnePoll(parseInt(pollid), res);
  }
});


//Get all polls
app.get('/polls', function(req, res, next) {
    console.log("REQUEST RECEIVED ");
    createPoll();
    getAllPolls(res);
});

//Won't run on 8080 on laptop - moving to 8085 for now 
app.listen(process.env.PORT || 8085, function(){
	console.log('Voting app listening on port 8085');
});
