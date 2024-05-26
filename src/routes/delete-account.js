const express = require('express')
const router = express.Router()
const { verifyIfExistsAccountCPF } = require('../middlewares/verifyExistsAccount')
const { customers } = require('../middlewares/verifyExistsAccount')

router.delete('/account', verifyIfExistsAccountCPF, (request, response) => {
	const { customer } = request
	const customerDeleted = customer.name
	const index = customers.findIndex(c => c === customer)

	customers.splice(index, 1)

	return response.status(200).send({
		success: `Customer ${customerDeleted} successfully deleted`,
	})
})

module.exports = router