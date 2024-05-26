const express = require('express')
const router = express.Router()
const { verifyIfExistsAccountCPF } = require('../middlewares/verifyExistsAccount')
const { customers } = require('../middlewares/verifyExistsAccount')

router.post('/deposit', verifyIfExistsAccountCPF, (request, response) => {
	const { description, amount } = request.body

	const { customer } = request

	const statementOperation = {
		description,
		amount,
		created_at: new Date(),
		type: 'credit',
	}

	customer.statement.push(statementOperation)

	return response
		.status(201)
		.send({ success: `Deposit of $${amount} made successfully!` })
})

module.exports = router