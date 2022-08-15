import logo from './logo.svg';
import './App.css';
import abhisalesforce from './components/product/abhisalesforce.jpeg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage';


function App() {
  return (
  

    <Router>
      <Routes>

      <Route  path="/" element={<Homepage/>}>
      
       
        </Route>

       <Route path = "/productpage" element={<ProductPage/>}/> 
      </Routes>
     
    </Router>
    

    


    
    

    
    
    
    
   
    
    



  );
}

export default App;
