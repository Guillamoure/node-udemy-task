// CRUD
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {return console.log("Unable to connect to database")}

  const db = client.db(databaseName)


  const mongodbInsertOne = (collection, object) => {
    db.collection(collection).insertOne(object, (error, result) => {
      if (error){return console.log(`Unable to insert document into ${collection}`)}
      console.log(result.ops)
    })
  }

  const mongodbInsertMany = (collection, array) => {
    db.collection(collection).insertMany(array, (error, result) => {
      if (error){return console.log(`Unable to insert document into ${collection}`)}
      console.log(result.ops)
    })
  }

  mongodbInsertMany('tasks', [
    { description: "Cooked Lunch", completed: true},
    { description: "Cleaned House", completed: false},
    { description: "Mailed Letter", completed: false}
  ])

})
