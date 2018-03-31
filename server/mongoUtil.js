"use strict"

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
    connect() {
        client.connect('mongodb://localhost:27017', (err, db) => {
            if (err) {
                console.log("Error connecting to Mongo - check mongod connection");
                process.exit(1);
            }
            _db = db.db('olympics-dev');
            console.log("Connected to Mongo");
        });
    },
    sports() {
        console.log(_db);
        return _db.collection('sports');
    }
}