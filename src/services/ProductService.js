import axios from "axios";

   export const getProduct = async(productID) => {
    let PRODUCT_API_BASE_URL = "https://customer360-api.herokuapp.com/api/salesforce/products/product/"+productID;
        console.log(PRODUCT_API_BASE_URL);
        const result = await axios.get(PRODUCT_API_BASE_URL);
        return result.data;
     } 

