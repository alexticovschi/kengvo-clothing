import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from '../../redux/cart/cart-selector';

import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import "./styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
      ))}
    </div>
    <CustomButton>GO TOT CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
