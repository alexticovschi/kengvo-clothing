import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';

import { selectCartItems } from "../../redux/cart/cart-selectors";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import "./styles.scss";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Yout cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>GO TOT CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
