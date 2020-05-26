const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value){
      if(!validator.isEmail(value)){throw new Error('Email is invalid')}
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value){
      if(value.includes("password")){throw new Error('Password cannot contain "password".')}
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0){throw new Error('Age must be a positive number')}
    }
  }
})

// let me = new User({name: "Guillamoure    ", email: "Mike@ikea.net", password: "wwwwwwmdrwwwwww"})
//
// me.save()
//   .then(console.log)
//   .catch(console.log)

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

new Task({description: "Clean Island"})
  .save()
    .then(console.log)
    .catch(console.log)
