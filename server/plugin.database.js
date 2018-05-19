let db = module.exports = {};

require('mongodb').MongoClient.connect(`mongodb://127.0.0.1:27017`, (err, database) => {

  if(err) throw err;

  ['users', 'items'].map((collection)=> {

    db[collection] = database.db('fearless-apps').collection(collection);

  });

});