require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ecdd4231623baa37261b2ff')
//   .then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
//   })
//   .then(result => {
//     console.log(result)
//   })
//   .catch(console.log)

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5ecdd4231623baa37261b2ff')
  .then(r => {
    console.log(r)
  })
  .catch(console.log)
