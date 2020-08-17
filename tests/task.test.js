const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const { userOneId, userOne, configureDatabase, userTwo, taskTwo } = require('./fixtures/db')

beforeEach(configureDatabase)

test('Should create task for user', async () => {
	const response = await request(app)
		.post('/tasks')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send({
			description: 'From my test'
		})
		.expect(201)

	const task = await Task.findById(response.body._id)
	expect(task).not.toBeNull()
	expect(task.completed).toBe(false)
})

test('Should access all tasks for one user', async () => {
	var response = await request(app)
		.get('/tasks')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.expect(200)

		expect(response.body.length).toBe(2)
})

test('Should not be able to delete other users task', async () => {
	const response = await request(app)
		.delete(`/tasks/${taskTwo._id}`)
		.set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
		.send()
		.expect(404)

		const task = await Task.findById(taskTwo._id)
		expect(task).not.toBeNull()
})
