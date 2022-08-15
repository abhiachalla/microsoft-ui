import React from "react";
import './productCard.scss';

const ProductCard = (props) => {

    

    let s = "productImage2"
    if(props.product!==null) {

        if(props.product.productID === 7  || props.product.productID === 8 ) {
            
            s="productImage3";
        } else {
            s="productImage2";
        }
        
    }

    return (

    <div className="productCard">
        {props.product!==null && <h1 className="productName2">{props.product.productName}</h1>}
        <div className="overview">Overview</div>
        {props.product!==null && <h1 className="productOverview2">{props.product.productOverview}</h1>}
        <div className="overview">Features</div>
        {props.product!==null && <h1 className="productOverview2">{props.product.productFeatures}</h1>}
        <div className="overview">FAQ</div>
        {props.product!==null && <h1 className="productOverview2">{props.product.productFAQ}</h1>}
        {props.product!==null && <img className={s} src={props.product.productImageURL} alt="" /> }
    </div>
        );
}

export default ProductCard;