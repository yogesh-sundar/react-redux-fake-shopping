import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/Actions/actions';
import ProductComponent from './ProductComponent';

function ProductListing() {

    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((error) => {
            console.log("Error", error)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts()
    }, [])

    console.log(products)

    return (
        <>
             <ProductComponent />
        </>
    )
}

export default ProductListing

