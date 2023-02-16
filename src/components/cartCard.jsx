
const cartCard = (props) => {

    const product = props.product

    return (
        <div className='productCard'>
            <img src={`${product.image_url}`} className='cardPic'/>
            <section>
                <h2>{`${product.name}`}</h2>
                <h2>{`${product.description}`}</h2>
                <h4> Quantity: {`${product.quantity}`}</h4>
            </section>
        </div>
    )
}

export default cartCard