import './App.css';
import Welcome from './components/Welcome'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="welcome-text">Welcome to</p>
        <h1>DOGGY DAYCARE</h1>
        <Welcome />
      </header>
    </div>
  );
}

export default App;
