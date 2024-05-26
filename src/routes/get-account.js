const express = require('express')
const router = express.Router()
const { verifyIfExistsAccountCPF } = require('../middlewares/verifyExistsAccount')
const { customers } = require('../middlewares/verifyExistsAccount')

router.get('/account', verifyIfExistsAccountCPF, (request, response) => {
	const { customer } = request

	if (customer) {
		return response.json(customer)
	}
	const customersInfo = customers.map(customer => ({
		name: customer.name,
		cpf: customer.cpf
	}))
	return response.json(customersInfo)
})

module.exports = router