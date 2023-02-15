require('dotenv').config()
const express = require('express')
const cors = require('cors')
const session = require('express-session')

const {SERVER_PORT, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(cors())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

const {getCustomers, getProducts, addToCart, viewCart} = require('./controller')

app.get('/customers', getCustomers)
app.get('/products', getProducts)
app.post('/addToCart', addToCart)
app.get('/viewCart', viewCart)

app.listen(SERVER_PORT, () => console.log(`Avengers assemble on port ${SERVER_PORT}`))