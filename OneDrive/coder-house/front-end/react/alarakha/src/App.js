import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>hecho • con • amor</h3>
        <img src={logo} alt="logo" />
        {/* className="App-logo" */}
        <ul>
          <li>Brocheros</li>
          <li>Carteras</li>
          <li>Mochilas</li>
          <li>Neceseres</li>
          <li>Portatodos</li>
        </ul>
        <a
          className="App-link"
          href="https://alarakha-neceseres.000webhostapp.com/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitanos!
        </a>
      </header>
    </div>
  );
}

export default App;
