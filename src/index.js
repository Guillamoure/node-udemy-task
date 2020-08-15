const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 4000

// app.use((req, res, next) => {
// 	if (req.method === 'GET') {
// 		res.send('GET requests are disabled')
// 	} else {
// 		next()
// 	}
// })

// app.use((req, res, next) => {
// 	res.status(503).send('Site is temporarily down for maintainence')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
	// const task = await Task.findById('5f373c71fc011ece942dbf0b')
	// await task.populate('author').execPopulate()
	// console.log(task.author)

	const user = await User.findById('5f373be01148e4d8a0c055ab')
	await user.populate('tasks').execPopulate()
	console.log(user.tasks)
}

main()
