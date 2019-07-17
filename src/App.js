import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import Header from './Components/Header';
import SignInAndSignUpPage from './Pages/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/utils';

class App extends Component {
  state = {
    currentUser: null
  }

  unsubScribeFromAuth = null;

  componentDidMount() {
    this.unsubScribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
    })
  }

  componentWillUnmount() {
    this.unsubScribeFromAuth();
  }

  render() {
    return ( 
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;