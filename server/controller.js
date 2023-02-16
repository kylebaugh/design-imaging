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
            SELECT * FROM products
            ORDER BY product_id;`)
                .then((dbRes) => {
                    res.status(200).send(dbRes[0])
                })
                .catch((err) => {
                    console.log(err)
                    res.status(400).send(err)
                })
    }, 

    addNewProduct: (req, res) => {
        console.log(req.body)

        sequelize.query(`
            INSERT INTO products
            (name, description, image_url)
            VALUES
            ('${req.body.name}', '${req.body.description}', '${req.body.image_url}')
            RETURNING *;`)
                .then((dbRes) => {
                    res.status(200).send(dbRes[0])
                })
                .catch((err) => {
                    console.log(err)
                    res.status(400).send(err)
                })
    }, 

    addToCart: (req, res) => {

        let id = req.body.product_id

        // console.log(req.body)
        // console.log(id)

        let newItem = {...req.body}
        
        newItem.quantity = 1
        
        if(req.session.cart){
            
            let fullCart = [...req.session.cart]

            let existing = fullCart.findIndex(el => el.product_id === req.body.product_id)

            existing > -1 ? req.session.cart[existing].quantity++ : req.session.cart.push(newItem)
        }else{
            req.session.cart = [newItem]
        }

        // console.log(req.session.cart)
        
        res.sendStatus(200)
    },

    viewCart: (req, res) => {
        res.status(200).send(req.session.cart)
    },

    submitOrder: (req, res) => {
        const {id} = req.params

        sequelize.query(`
            INSERT INTO orders
            (customer_id)
            VALUES
            (${id})
            RETURNING *;`)
                .then(dbRes => {
                    console.log(dbRes[0])

                    let fullCart = [...req.session.cart]

                    fullCart.forEach(el => {
                        sequelize.query(`
                            INSERT INTO order_products
                            (order_id, product_id, quantity)
                            VALUES
                            (${dbRes[0][0].order_id}, ${el.product_id}, ${el.quantity});`)
                                .then(dbRes2 => {
                                console.log(dbRes2[0])
                                req.session.cart = ''
                                return res.sendStatus(200)
                            })
                    })
                })

    }
}