import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import NavbarComp from './components/NavbarComp/navbarComp';
// import { ItemListContainer } from './components/ItemListContainter/ItemListCointainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <NavbarComp/>
        {/* <ItemListContainer/> */}
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
