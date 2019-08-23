import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import CheckoutPage from './Pages/CheckoutPage';
import SignInAndSignUpPage from './Pages/SignInAndSignUpPage';
import Header from './Components/Header';

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/utils';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from "./redux/user/user-selectors";
import { selectCollectionsForPreview } from './redux/shop/shop-selectors';

class App extends Component {

  unsubScribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

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
      addCollectionAndDocuments(
        'collections', 
        collectionsArray.map(({ title, items }) => ({ title, items })));
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
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={ () => this.props.currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);