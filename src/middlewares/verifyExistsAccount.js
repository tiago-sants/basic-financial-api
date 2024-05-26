const express = require('express')
const router = express.Router()

const customers = []

function verifyIfExistsAccountCPF(request, response, next) {
	const { cpf } = request.headers

	if (!cpf) {
		return next()
	}

	const customer = customers.find(customer => customer.cpf === cpf)

	if (!customer) {
		return response.status(400).json({ error: 'Customer not found' })
	}

	request.customer = customer

	return next()
}


module.exports = { verifyIfExistsAccountCPF, customers }