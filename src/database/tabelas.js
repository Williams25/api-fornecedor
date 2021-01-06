const models = [
  require('../model/fornecedor'),
  require('../model/produtos')
]

async function createTable () {
  for (let i = 0; i < models.length; i++) {
    const model = models[i]
    await model.sync()
  }
}

module.exports = createTable()