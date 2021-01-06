const router = require('express').Router()

const fornecedores = require('./fornecedores')
const produtos = require('./produtos')

router.use('/fornecedores', fornecedores)
router.use('/produtos', produtos)

module.exports = router