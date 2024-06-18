
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Product from './Components/Product.js';
// import Product from './Components/product.js';
import Product1 from './Components/Product1.js';
import Cart from './Components/Cart.js';
import {CartProvider} from 'react-use-cart'
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';



function App() {
  return (
    <>
        <CartProvider>
       <Router>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/products' element={<Products/>} />
         <Route path='/products/:id' element={<Product1/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         {/* <Route path='/contact' element={<Contact/>} /> */}
          {/* <Route path='/services' element={<About/>} />*/}
         {/* <Route path='/movies' element={<Contact/>} /> */}
         {/* <Route path='/mobiles' element={<Mobiles/>} />
         <Route path='/myform' element={<MyForm/>} />
         <Route path='/counter' element={<Counter/>} />  */}


       
       </Routes>
       <Footer/>
   </Router> 
   </CartProvider>
      {/* <Navbar />
      <Home />
      <Products /> */}




    </>

  );
}

export default App;
