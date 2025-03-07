import React from "react";
import { getProductsById } from "./api";
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
const ProductDetails=()=>{
    const params=useParams();
    const [productDetails, setProductDetails]=useState();

    const id=params.id;

    const fetchProductData = async() => {
        console.log(`I am calling api with ${id}`)
        const data = await getProductsById(id);
                setProductDetails(data);
    }


        useEffect(()=>{
               fetchProductData();
            },[]);

console.log(productDetails);


    return<div> I am the product {params.id}</div>
}
export default ProductDetails;