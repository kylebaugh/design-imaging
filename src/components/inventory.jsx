import {useState, useEffect, useContext} from 'react'

import axios from 'axios'

import Product from './product'

const Inventory = () => {

    const [products, setProducts] = useState([])
    const [newProdName, setNewProdName] = useState('')
    const [newProdDesc, setNewProdDesc] = useState('')
    const [newProdImage, setNewProdImage] = useState('')

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

    const addNewProduct = () => {
        let bodyObj = {
            name: newProdName,
            description: newProdDesc,
            image_url: newProdImage
        }

        axios.post('/newProd', bodyObj)
            .then((res) => {
                console.log(res.data)
                getAllProducts()
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

            <section>
                <input placeholder='Product Name' id='name' value={newProdName} onChange={(e) => setNewProdName(e.target.value)}/>
                <input placeholder='Product Description' id='description' value={newProdDesc} onChange={(e) => setNewProdDesc(e.target.value)}/>
                <input placeholder='Product Image URL' id='picURL' value={newProdImage} onChange={(e) => setNewProdImage(e.target.value)}/>
                <button onClick={() => addNewProduct()}>Add New Product</button>
            </section>

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