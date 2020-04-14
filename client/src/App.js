import React, {Fragment} from 'react';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import StockState from './context/stock/StockState'
import AuthState from './context/auth/AuthState'

import './App.css';

const App = () => {
  return (
      <AuthState>
     <StockState>
     <Router>
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    </Fragment>
     </Router>
     </StockState>
      </AuthState>
  );
}

export default App;
