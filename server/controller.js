require('dotenv').config()

const {CONNECTION_STRING} = process.env

const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    getCustomers: (req, res) => {
        sequelize.query(`
            SELECT * FROM customers;
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send(err)
        })
    }, 
    
    getProducts: (req, res) => {
        sequelize.query(`
            SELECT * FROM products;
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send(err)
        })
    }, 

    addToCart: (req, res) => {

        let newItem = {...req.body}

        newItem.quantity = 1

        req.session.cart ? req.session.cart.push(newItem) : req.session.cart = [newItem]

        console.log(req.session.cart)
        
        res.sendStatus(200)
    },

    viewCart: (req, res) => {
        res.status(200).send(req.session.cart)
    }
}