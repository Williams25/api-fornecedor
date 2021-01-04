const fornecedor = require('../model/fornecedor')

class Fornecedor {

  async index() {
    return await fornecedor.findAll()
  }

  async findId(id) {
    const result = await fornecedor.findOne({
      where: {
        id
      }
    })

    if (!result) throw new Error('Fornecedor não encontrado')

    return result
  }

  async create({ empresa, email, categorias }) {
    const result = await fornecedor.create({
      empresa: empresa,
      email: email,
      categorias: categorias
    })

    return result
  }

  async update({ id, empresa, email, categorias }) {
    return await fornecedor.update({ empresa, email, categorias }, { where: { id } })
  }

  async delete(id) {
    return await fornecedor.destroy({ where: { id } })
  }
}

module.exports = new Fornecedor