import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import NavbarComp from './components/NavbarComp/navbarComp';
import { ItemListContainer } from './components/ItemListContainter/ItemListCointainer';

function App() {
  return (
    <div className="App">
        <NavbarComp/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
