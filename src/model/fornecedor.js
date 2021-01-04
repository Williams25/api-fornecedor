const Sequelize = require('sequelize')
const sequelize = require('../database/conexao')

const colunas = {
  empresa: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categorias: {
    type: Sequelize.ENUM('ração', 'brinquedos', 'remedios'),
    allowNull: false
  }
}

module.exports = sequelize.define('fornecedor', colunas)