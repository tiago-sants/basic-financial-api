const express = require('express')
const router = express.Router()
const { customers } = require('../middlewares/verifyExistsAccount')
const { v4: uuidv4 } = require('uuid')


router.post('/account', (request, response) => {
	const { cpf, name } = request.body
	const customerAlreadyExists = customers.some(customer => customer.cpf === cpf)

	if (customerAlreadyExists) {
		return response.status(400).json({ error: 'Customer already exists!' })
	}

	customers.push({
		cpf,
		name,
		id: uuidv4(),
		statement: [],
	})

	return response
		.status(201)
		.send({ success: `Account created, Customer ${name}` })
})

module.exports = router