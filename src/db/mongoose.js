const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

// let me = new User({name: "Guillamoure", age: "Guillaless"})
//
// me.save()
//   .then(console.log)
//   .catch(console.log)

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

// new Task({description: "Make Dinner", completed: false})
//   .save()
//     .then(console.log)
//     .catch(console.log)
