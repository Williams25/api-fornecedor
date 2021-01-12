const router = require('express').Router()
const fornecedor = require('../controller/fornecedor')

router.get('/', fornecedor.index)
router.get('/:id', fornecedor.findId)
router.post('/', fornecedor.create)
router.put('/', fornecedor.update)
router.delete('/:id', fornecedor.delete)

module.exports = router