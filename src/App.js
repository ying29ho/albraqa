import logo from './logo.svg';
import './App.css';
import Homepage from './homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOME PAGE
        </p>
        
      </header>
    </div>
  );
}

export default App;
