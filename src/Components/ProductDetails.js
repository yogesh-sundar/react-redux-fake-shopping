import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/Actions/actions';

function ProductDetails() {

    const { productId } = useParams();

    let product = useSelector((state) => state.product)



    const dispatch = useDispatch();

    const fetchProductDetails = async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            .catch((error) => {
                console.log("Error", error)
            })
        dispatch(selectedProduct(response.data))
        console.log(response.data)
    };

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetails(productId);
        }
    }, [productId])

    return (

        <div>
            <img src={product.image} alt={product.title} style={{ height: "200px", width: "200px" }} />
            <h1>{product.title}</h1>
            <h4>{product.price}</h4>
        </div>

    )
}

export default ProductDetails
