import React from "react";
import './ProductPage.scss'
import { useLocation } from "react-router-dom";
import {getProduct} from "../services/ProductService";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/productCard/ProductCard";



 

const ProductPage = () => {


    const [product, setProduct] = useState(null);
    const location = useLocation();
    const productID = location.state;

    const temp = async (productID) => {
     const re = await getProduct(productID);      
     setProduct(re); 
    }
    useEffect(()=>{
        temp(productID)
    },[])



    console.log(product);
   

    



    

return (

    <>
    
        <ProductCard product={product}/>
        

    

    </>
);
}

export default ProductPage;


 