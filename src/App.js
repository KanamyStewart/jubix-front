import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Isso aqui faz oq? <code>Assim faz isso!</code> Bah que lega!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Que legal ele atualiza sozinho
        </a>
        <Button color="danger">Danger!</Button>
      </header>
    </div>
  );
}

export default App;
