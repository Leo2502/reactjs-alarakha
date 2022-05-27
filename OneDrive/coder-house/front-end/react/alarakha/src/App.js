import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navbar from './components/navbar/navbar';
import { ItemListContainer } from './components/ItemListContainter/ItemListCointainer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
