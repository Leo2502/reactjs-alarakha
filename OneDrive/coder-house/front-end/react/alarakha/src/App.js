import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import NavbarComp from './components/NavbarComp/navbarComp';
import { ItemListContainer } from './components/ItemListContainter/ItemListCointainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';
import './App.scss'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
        <NavbarComp/>
        <Routes>
          <Route path="/" element={ <ItemListContainer/> }/>
          <Route path="/categoria/:categoryId" element={ <ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path="/contacto" element={ <Contacto /> } />
          <Route path="/cart" element={ <Cart/> } />
          <Route path="*" element={ <Navigate to={"/"} /> } />
        </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
