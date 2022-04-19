import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductComponent() {

    const product = useSelector((state) => state.allProducts.products)


    return (
        <div>
            {product.map((items, key) => (
                <Link to={`/${items.id}`}>
                    <div id={key}>
                        <img src={items.image} alt={items.title} style={{ height: "200px", width: "200px" }} />
                        <h1>{items.title}</h1>
                        <h4>{items.price}</h4>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export default ProductComponent
