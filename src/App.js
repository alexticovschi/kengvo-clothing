import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import Header from './Components/Header';
import SignInAndSignUpPage from './Pages/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/utils';
import { setCurrentUser } from './redux/user/user-actions';

class App extends Component {

  unsubScribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubScribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
            ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubScribeFromAuth();
  }

  render() {
    return ( 
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);