const { MongoClient } = require('mongodb');

const dbConnectionURL = "mongodb://127.0.0.1:27017"
const client = new MongoClient(dbConnectionURL);

const dbConnection = async () => {
    await client.connect();
    const db = client.db("mongoDB");
    return db;
}

module.exports = {dbConnection}