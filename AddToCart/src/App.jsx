import './App.css'
import Header from './Component/Header'
import Home from './Component/Home';
import Cart from './Component/Cart';
import { useState } from 'react';
import productList from './Component/data';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';

function App() 
{  const [cartItemId,SetCartItemId]= useState("");
  const [cartAllProduct, SetCartAllProduct] = useState([]);
  useEffect(() => {

    const filteredObject = productList.filter(
      (product) => product.id == cartItemId
    );
    SetCartAllProduct([...cartAllProduct, ...filteredObject]);
    console.log([...cartAllProduct, ...filteredObject]);

  }, [cartItemId]);
  
  return (
    <>      
    <BrowserRouter>
        <Header cartAllProduct={cartAllProduct}/> {/*  Here this <header/> component will be always there on every page  */}
        <Routes>  {/* Create seperate route */}
          <Route   
            path="/"
            element={<Home SetCartItemId={SetCartItemId}/>}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartAllProduct={cartAllProduct} SetCartAllProduct={SetCartAllProduct}/>}
          ></Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}
export default App
