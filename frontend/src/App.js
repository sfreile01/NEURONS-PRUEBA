import React from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation'
import CreateMenu from './components/CreateMenu'
import CreateSales from './components/CreateSales'
import CreateUsers from './components/auth/CreateUsers'
import Login from './components/auth/Login'
import Menu from './components/Menu'


function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={Menu} />
      <Route path="/edit/:id" component={CreateMenu} />
      <Route path="/Login" component={Login} />
      <Route path="/CreateSales" component={CreateSales} />
      <Route path="/CreateUsers" component={CreateUsers} />
    </Router>
  );
}

export default App;
