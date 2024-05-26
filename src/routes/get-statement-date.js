const express = require('express')
const router = express.Router()
const { verifyIfExistsAccountCPF } = require('../middlewares/verifyExistsAccount')
const { customers } = require('../middlewares/verifyExistsAccount')

router.get('/statement/date', verifyIfExistsAccountCPF, (request, response) => {
	const { customer } = request
	const { date } = request.query

	const dateFormat = new Date(`${date} 00:00`)

	const statement = customer.statement.filter(
		statement =>
			statement.created_at.toDateString() ===
			new Date(dateFormat).toDateString()
	)

	return response.json(statement)
})

module.exports = router