import './App.css';
import Welcome from './components/Welcome';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="welcome-text">Welcome to</p>
        <h1>DOGGY DAYCARE</h1>
      </header>
      <main className='App-main'>
        <Register />
      </main>
    </div>
  );
}

export default App;
