const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/doctor';

const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('connected to local mongodb server'); 
    } catch (error) {
        console.error('error connecting to the local mongo db server');
    }
}

connectToDatabase();

module.exports = client;

