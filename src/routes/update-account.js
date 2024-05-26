const express = require('express')
const router = express.Router()
const { verifyIfExistsAccountCPF } = require('../middlewares/verifyExistsAccount')
const { customers } = require('../middlewares/verifyExistsAccount')

router.put('/account', verifyIfExistsAccountCPF, (request, response) => {
	const { name } = request.body
	const { customer } = request
	const oldName = customer.name

	customer.name = name
	return response.status(201).send({
		success: 'Name changed successfully.',
		from: `${oldName}`,
		to: `${name}`,
	})
})

module.exports = router