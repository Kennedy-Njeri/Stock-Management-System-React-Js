import React, {Fragment} from 'react';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import StockState from './context/stock/StockState'

import './App.css';

const App = () => {
  return (
     <StockState>
     <Router>
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    </Fragment>
     </Router>
     </StockState>
  );
}

export default App;
