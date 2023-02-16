import axios from 'axios'

const Product = (props) => {

    const product = props.product

    const addToCart = (obj) => {
        axios.post('/addToCart', obj)
            .then((res) => {
                console.log(res.data)
                alert(`${obj.name} has been added to cart!`)
            })
    }

    return (
        <div className='productCard'>
            <img src={`${product.image_url}`} className='cardPic'/>
            <section>
                <h2>{`${product.name}`}</h2>
                <h2>{`${product.description}`}</h2>
            </section>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default Product