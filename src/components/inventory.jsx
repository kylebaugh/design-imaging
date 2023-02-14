import {useState, useEffect, useContext} from 'react'

import axios from 'axios'

import Product from './product'

const Inventory = () => {

    const [products, setProducts] = useState([])

    const getAllProducts = () => {

        axios.get(`/products`)
            .then((res) => {
                // map over res
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <div>
            <h1>Inventory Page</h1>
            {products.map((product) => {
                let id = product.product_id

                return (
                    <Product
                        key={id}
                        product={product}
                    />
                )
            })}
        </div>
    )
}

export default Inventory