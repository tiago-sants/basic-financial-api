const express = require('express')
const router = express.Router()
const { customers } = require('../middlewares/verifyExistsAccount')
const createAccount = require('./create-account')
const deleteAccount = require('./delete-account')
const depositAccount = require('./deposit-account')
const getAccount = require('./get-account')
const getBalanceRoute = require('./get-balance')
const getStatementDate = require('./get-statement-date')
const getStatement = require('./get-statement')
const updateAccount = require('./update-account')
const withDrawAccount = require('./withdraw-account')

router.use((request, response, next) => {
    request.customers = customers;
    next();
  })

router.use(createAccount)
router.use(deleteAccount)
router.use(depositAccount)
router.use(getAccount)
router.use(getBalanceRoute)
router.use(getStatementDate)
router.use(getStatement)
router.use(updateAccount)
router.use(withDrawAccount)

module.exports = router