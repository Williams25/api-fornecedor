const router = require('express').Router()
const produto = require('../controller/produtos')

router.get('/', produto.index)
router.get('/:id', produto.findId)
router.get('/:id/fornecedor', produto.findIdFornecedor)
router.post('/', produto.create)
router.put('/', produto.update)
router.put('/atualizar-estoque', produto.updateEstoque)
router.delete('/:id', produto.delete)

module.exports = router