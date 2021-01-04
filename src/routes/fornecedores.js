const router = require('express').Router()
const Repository = require('../repository/fornecedor')

router.get('/', async (req, res) => {
  await Repository.index().then(result => {
    return res.status(200).json(result)
  }).catch(err => res.status(400).json({ message: err.message }))
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  await Repository.findId(id).then(result => {
    return res.status(200).json(result)
  }).catch(err => res.status(400).json({ message: err.message }))
})

router.post('/', async (req, res) => {
  const { empresa, email, categorias } = req.body

  await Repository.create(req.body).then(result => {
    return res.status(201).json(result)
  }).catch(err => res.status(400).json({ message: err.message }))
})

router.put('/', async (req, res) => {
  const { id, empresa, email, categorias } = req.body

  await Repository.update(req.body).then(result => {
    if (result == 1) return res.status(200).json({ message: 'Fornecedor alterado' })
    return res.status(400).json({ message: 'Erro ao alterar fornecedor' })
  }).catch(err => res.status(400).json({ message: err.message }))
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  await Repository.delete(id).then(result => {
    if (result == 1) return res.status(200).json({ message: 'Fornecedor apagado' })
    return res.status(400).json({ message: 'Erro ao apagar fornecedor' })
  }).catch(err => res.status(400).json({ message: err.message }))
})

module.exports = router