import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import '../components/product/Product.scss';
import abhisalesforce from '../components/product/abhisalesforce.jpeg'
import user2abhisaslesforce from '../components/product/user2abhisalesforce.jpeg';

const whichUser=(user)=> {
    if(user===1) {
        return abhisalesforce;
    } else {
        return user2abhisaslesforce;
    }
}

const Homepage = () => {
    const [user,setUser] = useState(1);
    
    
        const HandleClickUser1=()=> {
        setUser(1);
        }
        const HandleClickUser2=()=> {
        setUser(2);
        }
    
    
   

    return (
        <>
        <button className="button1" onClick={HandleClickUser1}>User 1</button>
        <button className="button2" onClick={HandleClickUser2}>User 2</button>
        <div className="cust360div"> <h1 className="cust360">Customer <span className="span360">360</span></h1></div>
        <h1><img className="salesImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EZQG5mRHkybGTwLiVukdrCLDRP471Xq5czk4s3c2vw&s" alt="" /></h1>
        {/* <div className="textC"><h1 className="h1C">Bringing Companies and Customers together!</h1></div> */}
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
        <li><img className="customer360image" src={whichUser(user)} /></li>
        
        </ul>
        </>
    );
}

export default Homepage;