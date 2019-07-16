import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';

function App() {
  return ( 
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;