
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/navbar'
import ItemListContainer from './components/products/ItemListContainer';
import ItemDetailContainer from './components/item/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';


function App() {
  return (
    <div className="App bg-dark min-vh-100">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
