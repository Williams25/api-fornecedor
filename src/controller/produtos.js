const Repository = require('../repository/produtos')

module.exports = {
  index: async (req, res) => {
    await Repository.index().then(produtos => {
      return res.status(200).json(produtos)
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  findIdFornecedor: async (req, res) => {
    const { id } = req.params

    await Repository.findIdFornecedor(id).then(produtos => {
      return res.status(200).json(produtos)
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  findId: async (req, res) => {
    const { id } = req.params

    await Repository.findId(id).then(produto => {
      return res.status(200).json(produto)
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  create: async (req, res) => {
    const { titulo, preco, estoque, fornecedor } = req.body

    await Repository.create(req.body).then(produto => {
      return res.status(201).json(produto)
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  update: async (req, res) => {
    const { titulo, preco, estoque, fornecedor, id } = req.body

    await Repository.update(req.body).then(result => {
      if (result == 1) return res.status(200).json({ message: 'Produto alterado' })
      return res.status(400).json({ message: 'Erro ao alterar produto' })
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  updateEstoque: async (req, res) => {
    const { estoque, fornecedor, id } = req.body

    await Repository.updateEstoque(req.body).then(result => {
      if (result == 1) return res.status(200).json({ message: 'Estoque alterado' })
      return res.status(400).json({ message: 'Erro ao alterar estoque' })
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  delete: async (req, res) => {
    const { id } = req.params

    await Repository.delete(id).then(result => {
      if (result == 1) return res.status(200).json({ message: 'Produto apagado' })
      return res.status(400).json({ message: 'Erro ao apagar produto' })
    }).catch(err => res.status(400).json({ message: err.message }))
  }
}