import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import NavbarComp from './components/NavbarComp/navbarComp';
import { ItemListContainer } from './components/ItemListContainter/ItemListCointainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavbarComp/>
        <Routes>
          <Route path="/" element={ <ItemListContainer/> }/>
          <Route path="/categoria/:categoryId" element={ <ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/contacto" element={ <Contacto /> } />
          <Route path="*" element={ <Navigate to={"/"} /> } />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
