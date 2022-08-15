import React from "react";
import { useState } from "react";
import './Product.scss';
import { Link } from "react-router-dom";


const Product = (props) => {


    return (
        <>
        <div className="productImageContainer">
            <Link to="/productpage" state={props.ID}>
            <img className="productImage" src={props.imageSource} alt="" />
            </Link>
            
        </div>

        <div className="productNameContainer">
            <h3 className="productName">{props.productName}</h3>
        </div>
        </>
    );
};

export default Product;