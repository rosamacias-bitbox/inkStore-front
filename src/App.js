import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () =>
     (
      <div className="App">
        <Header />        
        <h1>[ink]Store  App</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>            
          </Switch>
        </BrowserRouter>
      </div>
    )
  export default App;