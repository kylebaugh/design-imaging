import axios from 'axios'

import { useState, useContext } from 'react'

const Product = (props) => {

    // const [itemName, setItemName] = useState('')
    // const [itemDescription, setItemDescription] = useState('')
    // const [itemPicture, setItemPicture] = useState('')

    const product = props.product

    console.log(product)

    return (
        <div className='productCard'>
            <img src={`${product.image_url}`} className='cardPic'/>
            <section>
                <h2>{`${product.name}`}</h2>
                <h2>{`${product.description}`}</h2>
            </section>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product