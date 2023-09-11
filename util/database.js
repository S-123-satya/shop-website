const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;//mongoclient constructor

let _db;
const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://vikas_5537:h2o9BctI1xVfbZp6@cluster0.nqyoptf.mongodb.net/?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db=client.db();
      callback(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getdb=()=>{
  if(_db)
    return _db
  throw "NO such database exist";
}

exports.mongoConnect=mongoConnect;
exports.getdb=getdb;
