const request = require('supertest')
const app = require('../src/app')

 test('Should signup a new user', async () => {
	 await request(app).post('/users').send({
		 name: 'Guillamoure',
		 email: 'sven@gov.edu',
		 password: 'MyPassword777!'
	 }).expect(201)
 })
