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

router.get('/balance', verifyIfExistsAccountCPF, (request, response) => {
	const { customer } = request
	const balanceUser = getBalance(customer.statement)
	return response.json({
		customer: customer.name,
		balance: balanceUser,
	})
})

module.exports = router