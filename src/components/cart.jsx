import axios from 'axios'
import {useState, useEffect, useContext} from 'react'

import CartCard from './cartCard' 


const Cart = () => {

    const [cart, setCart] = useState([])
    const [customer, setCustomer] = useState('')

    const viewCart = () => {
        axios.get('/viewCart')
            .then((res) => {
                console.log(res.data)
                setCart(res.data)
            })
    }

    const submitOrder = () => {
        // console.log(customer)
        axios.get(`/submitOrder/${customer}`)
            .then((res) => {
                console.log(res.data)
            })
    }

    useEffect(() => {
        viewCart()
    }, [])

    return (
        <div>
            <h1>My Cart</h1>

            <select value={customer} onChange={(e) => setCustomer(e.target.value)}>
                <option value='0'>Default...</option>
                <option value='1'>Lowes</option>
                <option value='2'>Home Depot</option>
                <option value='3'>Kyle</option>
            </select>

            <button onClick={() => submitOrder()}>Submit </button>

            {cart && <div>
                
                {cart.map((product) => {
                    let id = product.product_id
                    
                    return (
                        <CartCard
                        key={id}
                        product={product}
                        />
                        )
                })}
            </div>}
        </div>
    )
}

export default Cart