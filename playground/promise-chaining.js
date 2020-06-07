require('../src/db/mongoose')
const User = require('../src/models/user')

// 5ecd617f3a85a37766ce4315

// User.findByIdAndUpdate('5ecd617f3a85a37766ce4315', { age: 1 })
//   .then(user => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
//   })
//   .then(result => {
//     console.log(result)
//   })
//   .catch(console.log)

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount("5ecd617f3a85a37766ce4315", 2)
  .then(r => {
    console.log(r)
  })
  .catch(console.log)
