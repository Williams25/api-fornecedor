const router = require('express').Router()

const fornecedores = require('./fornecedores')

router.use('/fornecedores', fornecedores)

module.exports = router