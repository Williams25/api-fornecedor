require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./src/routes')

require('./src/database/tabelas').then(() => {
  console.info('created table')
}).catch(err => console.error(err.message))

app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // configurando cors
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).send({})
  }

  next()
})
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(router)

app.listen(process.env.PORTA, () => console.log(`http://localhost:${process.env.PORTA}`))