import axios from "axios";

   export const getProduct = async(productID) => {
    let PRODUCT_API_BASE_URL = "http://localhost:8080/api/salesforce/products/product/"+productID;
        console.log(PRODUCT_API_BASE_URL);
        const result = await axios.get(PRODUCT_API_BASE_URL);
        return result.data;
     } 

