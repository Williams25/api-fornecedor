const produtos = require('../model/produtos')

class Produtos {

  async index() {
    return await produtos.findAll()
  }

  async findId(id) {
    const result = await produtos.findOne({
      where: {
        id
      }
    })

    if (!result) throw new Error('Produto não encontrado')

    return result
  }

  async findIdFornecedor(id) {
    const result = await produtos.findAll({
      where: {
        fornecedor: id
      }
    })

    if (!result) throw new Error('Produto não encontrado')

    return result
  }

  async create({ titulo, preco, estoque, fornecedor }) {
    const result = await produtos.create({
      titulo, preco, estoque, fornecedor
    })

    return result
  }

  async update({ id, titulo, preco, estoque, fornecedor }) {
    return await produtos.update({ titulo, preco, estoque, fornecedor }, { where: { id } })
  }

  async delete(id) {
    return await produtos.destroy({ where: { id } })
  }
}

module.exports = new Produtos