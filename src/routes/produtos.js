const router = require('express').Router()
const Repository = require('../repository/produtos')

router.get('/', async (req, res) => {
  await Repository.index().then(produtos => {
    return res.status(200).json(produtos)
  }).catch(err => res.status(400).json({ message: err.message }))
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  await Repository.findId(id).then(produto => {
    return res.status(200).json(produto)
  }).catch(err => res.status(400).json({ message: err.message }))
})

router.get('/:id/fornecedor', async (req, res) => {
  const { id } = req.params

  await Repository.findIdFornecedor(id).then(produtos => {
    return res.status(200).json(produtos)
  }).catch(err => res.status(400).json({ message: err.message }))
})

router.post('/', async (req, res) => {
  const { titulo, preco, estoque, fornecedor } = req.body

  await Repository.create(req.body).then(produto => {
    return res.status(201).json(produto)
  }).catch(err => res.status(400).json({ message: err.message }))
})

router.put('/', async (req, res) => {
  const { titulo, preco, estoque, fornecedor, id } = req.body

  await Repository.update(req.body).then(result => {
    if (result == 1) return res.status(200).json({ message: 'Produto alterado' })
    return res.status(400).json({ message: 'Erro ao alterar produto' })
  }).catch(err => res.status(400).json({ message: err.message }))
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  await Repository.delete(id).then(result => {
    if (result == 1) return res.status(200).json({ message: 'Produto apagado' })
    return res.status(400).json({ message: 'Erro ao apagar produto' })
  }).catch(err => res.status(400).json({ message: err.message }))
})

module.exports = router