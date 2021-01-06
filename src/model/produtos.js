const Sequelize = require('sequelize')
const sequelize = require('../database/conexao')

const colunas = {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  preco: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  estoque: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  fornecedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: require('./fornecedor'),
      key: 'id'
    }
  }
}

module.exports = sequelize.define('produto', colunas)