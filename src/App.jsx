import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Home from '@pages/Home/Home';
import Catalog from '@pages/Catalog/Catalog';
import Product from '@pages/Product/Product';
import Cart from '@pages/Cart/Cart';
import Checkout from '@pages/Checkout/Checkout';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/velvet-mist/" element={<Home />} />
          <Route path="/velvet-mist/home" element={<Home />} />
          <Route path="/velvet-mist/catalog" element={<Catalog />} />
          <Route path="/velvet-mist/product/:id" element={<Product />} />
          <Route path="/velvet-mist/cart" element={<Cart />} />
          <Route path="/velvet-mist/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
