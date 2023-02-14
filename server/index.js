require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env

const app = express()

app.use(express.json())
app.use(cors())

const {getCustomers} = require('./controller')

app.get('/customers', getCustomers)

app.listen(SERVER_PORT, () => console.log(`Avengers assemble on port ${SERVER_PORT}`))