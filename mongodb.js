// CRUD
const { MongoClient, ObjectID } = require('mongodb')

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
  //
  // db.collection('users').findOne({ _id: new ObjectID("5ec96828bd7a8701b607cdb0") }, (error, user) => {
  //   if (error) {return console.log("Unable to fetch")}
  //   console.log(user)
  // })
  //
  // db.collection('users').find({ age: 21 }).toArray((error, user) => {
  //   if (error) {return console.log("Unable to fetch")}
  //   console.log(user)
  // })
  //
  // db.collection('users').find({ age: 21 }).count((error, count) => {
  //   if (error) {return console.log("Unable to fetch")}
  //   console.log(count)
  // })

  db.collection('tasks').findOne({ _id: new ObjectID("5ec969878986d7e85de17125")}, (error, task) => {
    console.log(task)
  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    console.log(tasks)
  })
  // mongodbInsertMany('tasks', [
  //   { description: "Cooked Lunch", completed: true},
  //   { description: "Cleaned House", completed: false},
  //   { description: "Mailed Letter", completed: false}
  // ])

})
