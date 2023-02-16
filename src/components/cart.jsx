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
        axios.get(`/submitOrder/${customer}`)
            .then((res) => {
                console.log(res.data)
                alert('Order has been processed!')
            })
    }

    useEffect(() => {
        viewCart()
    }, [submitOrder])

    return (
        <div id='cart'>
            <h1>My Cart</h1>

            <section id='submitForm'>
                <select value={customer} onChange={(e) => setCustomer(e.target.value)}>
                    <option value='0'>Select Customer</option>
                    <option value='1'>Lowes</option>
                    <option value='2'>Home Depot</option>
                    <option value='3'>Kyle</option>
                </select>
                <button onClick={() => submitOrder()}>Submit </button>
            </section>


            {cart && <section className='products'>
                
                {cart.map((product) => {
                    let id = product.product_id
                    
                    return (
                        <CartCard
                        key={id}
                        product={product}
                        />
                        )
                })}
            </section>}

            {!cart && <section>
                        Add items from the Home page to see them in your cart!
                    </section>}
        </div>
    )
}

export default Cart