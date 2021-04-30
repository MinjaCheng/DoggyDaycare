import './App.css';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Information from './components/Information';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

    const [fetchData, setFetchData] = useState([]);

    useEffect( async () => {
        
        const url = 'https://api.jsonbin.io/b/6087ced8f6655022c46cff44/1';
            
            try {
                const response = await fetch(url);
                console.log('2. Got response', response);

                const data = await response.json();
                console.log('3. Got data', data);

                setFetchData(data);
            }
            catch (err) {
                console.log(err);
            }
        
    }, []);

    return (
        <div className="App" >
            <header className="App-header" >
                <p id="welcome-text" > Welcome to </p>
                <h1 > DOGGY DAYCARE </h1>
            </header >
            <main className='App-main' >
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Welcome />
                        </Route>
                        <Route path="/register">
                            <Register fetchData={fetchData} />
                        </Route>
                        <Route path="/info">
                            <Information fetchData={fetchData} />
                        </Route>
                    </Switch>
                </Router>
            </main>
            <footer className="App-footer">
                <p>©️ 2021 by Minja Cheng </p>
            </footer>
        </div >
    );
}

export default App;