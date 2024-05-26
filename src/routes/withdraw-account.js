const express = require('express')
const router = express.Router()
const { verifyIfExistsAccountCPF } = require('../middlewares/verifyExistsAccount')
const { customers } = require('../middlewares/verifyExistsAccount')

function getBalance(statement) {
	const balance = statement.reduce((acc, operation) => {
		if (operation.type === 'credit') {
			return acc + operation.amount
		}
		return acc - operation.amount
	}, 0)
	return balance
}

router.post('/withdraw', verifyIfExistsAccountCPF, (request, response) => {
	const { amount } = request.body

	const { customer } = request

	const balance = getBalance(customer.statement)

	if (balance < amount) {
		return response.status(400).json({ error: 'Insufficient funds!' })
	}

	const statementOperation = {
		amount,
		created_at: new Date(),
		type: 'debit',
	}

	customer.statement.push(statementOperation)

	return response
		.status(201)
		.send({ success: `Withdraw of $${amount} made successfully!` })
})

module.exports = router