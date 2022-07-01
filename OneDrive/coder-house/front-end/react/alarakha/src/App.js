import './App.scss'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainter/ItemListCointainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer'
import Medios from './components/Medios/Medios'
import NavbarComp from './components/NavbarComp/navbarComp';

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
          <Route path="/contacto" element={ <Contacto/> } />
          <Route path="/medios" element={ <Medios/> } />
          <Route path="/cart" element={ <Cart/> } />
          <Route path="*" element={ <Navigate to={"/"} /> } />
        </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
