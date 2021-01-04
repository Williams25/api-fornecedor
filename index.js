require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./src/routes')

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(router)

app.listen(process.env.PORTA, () => console.log(`http://localhost:${process.env.PORTA}`))