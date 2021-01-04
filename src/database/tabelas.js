const fornecedor = require('../model/fornecedor')

fornecedor.sync().then(() => {
  console.log('fornecedor criado')
}).catch(err => console.log(err))