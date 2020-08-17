const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
	name: 'Mike',
	email: 'mike4@example.com',
	password: '56what!!'
}

beforeEach(async () => {
	await User.deleteMany()
	await new User(userOne).save()
})

 test('Should signup a new user', async () => {
	 await request(app).post('/users').send({
		 name: 'Guillamoure',
		 email: 'sven@gov.edu',
		 password: 'MyPassword777!'
	 }).expect(201)
 })

test('Should login existing user', async () => {
	await request(app).post('/users/login').send({
		email: userOne.email,
		password: userOne.password
	}).expect(200)
})

test('Should not login nonexistant user', async () => {
	await request(app).post('/users/login').send({
		email: "nahnah@example.com",
		password: "doesNotExist8?"
	}).expect(400)
})
