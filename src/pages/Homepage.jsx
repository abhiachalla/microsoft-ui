import React from "react";
import Product from "../components/product/Product";
import '../components/product/Product.scss';
import abhisalesforce from '../components/product/abhisalesforce.jpeg'

const Homepage = () => {
    return (
        <>
        <div>Salesforce</div>
        <ul className='circle-container'>
        <li className='listItem'><Product ID="1" className="product" imageSource="//www.salesforce.com/content/dam/web/en_us/www/images/products/sales-circle.png"  productName = "Sales"/></li>
        <li className='listItem'><Product ID="3" className="product" imageSource="https://www.salesforce.com/content/dam/web/en_us/www/images/products/service-circle.png" productName = "Service"/></li>
        <li className='listItem'><Product ID="4" className="product" imageSource="https://www.salesforce.com/content/dam/web/en_us/www/images/products/marketing-circle.png" productName = "Marketing"/></li>
        <li className='listItem'><Product ID="5" className="product" imageSource="https://www.salesforce.com/content/dam/web/en_us/www/images/products/commerce-circle.png" productName = "Commerce"/></li>
        <li className='listItem'><Product ID="6" className="product" imageSource="https://www.salesforce.com/content/dam/web/en_us/www/images/products/analytics-circle.png" productName = "Tableau"/></li>
        <li className='listItem'><Product ID="7" className="product" imageSource="https://www.salesforce.com/content/dam/web/en_us/www/images/products/integration-circle.png" productName = "Mulesoft"/></li>
        <li className='listItem'><Product ID="8" className="product" imageSource="https://www.salesforce.com/content/dam/web/en_us/www/images/products/slack.png" productName = "Slack"/></li>
        <li className='listItem'><Product ID="9" className="product" imageSource="https://www.salesforce.com/content/dam/web/en_us/www/images/products/sustainability-circle.png" productName = "NetZero"/></li>
        <li className='listItem'><Product ID="10" className="product" imageSource="https://www.salesforce.com/content/dam/web/en_us/www/images/products/einstein-ai-circle.png" productName = "Einstein AI"/></li>
        <li className='listItem'><Product ID="11" className="product" imageSource="https://www.salesforce.com/content/dam/web/en_us/www/images/products/platform-circle.png" productName = "Platform"/></li>
        <li><img className="customer360image" src={abhisalesforce} /></li>
        
        </ul>
        </>
    );
}

export default Homepage;