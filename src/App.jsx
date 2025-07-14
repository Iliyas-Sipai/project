// import Blank from './hero/Blank';
// import CartProvider from './cart/CartContext';
// // import CartPage from './cart/CartContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroCompo from './hero/HeroCompo'
import NavCompo from './navbar/NavCompo'

import ContactCompo from './contact/ContactCompo';
import AboutCompo from './about/AboutCompo';
import Footer from './footer/Footer';
import CartProvider from './cart/CartContext'; // ✅ Make sure path is correct
import CartPage from './cart/CartPage';
import CategoryComp from './product/CategoryComp';

function App() {
  return (
    <CartProvider> {/* ✅ Wrap entire app inside CartProvider */}
      <Router>
        <NavCompo />
        <Routes>
          <Route path="/home" element={<HeroCompo />} />
          <Route path="/about" element={<AboutCompo />} />
          <Route path="/single-product" element={<CategoryComp/>} />
          <Route path="/contact" element={<ContactCompo />} />
          <Route path="*" element={<HeroCompo />} />
          {/* You can add CartPage later here */}
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
