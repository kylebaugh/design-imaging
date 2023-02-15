import axios from 'axios'
import {useState, useEffect, useContext} from 'react'

import CartCard from './cartCard' 


const Cart = () => {

    const [cart, setCart] = useState([])

    const viewCart = () => {
        axios.get('/viewCart')
            .then((res) => {
                console.log(res.data)
                setCart(res.data)
            })
    }

    useEffect(() => {
        viewCart()
    }, [])

    return (
        <div>
            <h1>My Cart</h1>
            {cart.map((product) => {
                let id = product.product_id

                return (
                    <CartCard
                        key={id}
                        product={product}
                    />
                )
            })}
        </div>
    )
}

export default Cart