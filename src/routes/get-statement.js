const express = require('express')
const router = express.Router()
const { verifyIfExistsAccountCPF } = require('../middlewares/verifyExistsAccount')
const { customers } = require('../middlewares/verifyExistsAccount')

router.get('/statement', verifyIfExistsAccountCPF, (request, response) => {
	const { customer } = request

	return response.json(customer.statement)
})

module.exports = router