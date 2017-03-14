
const mongoClient = require('mongodb').MongoClient;

const databaseName = "voting";
const collectionName = "polls";
const mongoURL = "mongodb://localhost:27017/" + databaseName;

/**
     Create one poll - insertOne
     Read all polls
     Read one poll
     Update one poll - add an item, add a vote to an item

**/


exports.save = function(JSONPoll, error) {
  mongoClient.connect(mongoURL, function(err, db) {
    if (err) callback(err);

      var coll = db.collection(collectionName);
      coll.insertOne(JSONPoll, function(err, data) {
        if(err) throw err;
        console.log("Saved to database " + JSON.stringify(data));
      });
      db.close();
  });
};


// exports.update = function(search, callback) {
//   callback("Updating");
//
//   mongoClient.connect(mongoURL, function(err,db){
//     if(err) callback(err);
//
//     var coll = db.collection(collectionName);
//     var r = yield coll.updateOne(search);
//     assert.equal(1, r.matchedCount);
//     assert.equal(1, r.modifiedCount);
//     db.close();
//   });
// }

exports.delete = function(callback) {
  callback("Deleting");
}

exports.getOnePoll = function(pollID, callback) {
  mongoClient.connect(mongoURL, function(err, db){
    if(err) throw(err);
    var coll = db.collection(collectionName);
    var query = { id : pollID };
    console.log("Getting poll with id of " + JSON.stringify(query));
    coll.find(query).toArray(function(err, data) {
      if (err) callback(err);
      if(data !== null && data.length >=1) {
        callback(data);
      } else {
        callback(false);
      }
    });
    db.close();
  });
}

exports.getAllPolls = function(callback) {
  mongoClient.connect(mongoURL, function(err, db){
    if(err) throw(err);
    var coll = db.collection(collectionName);

    coll.find().toArray(function(err, data) {
      if (err) callback(err);
      if(data !== null && data.length >=1) {
        callback(data);
      }
    });
    db.close();
  });

}
