import React from "react";
import CustomButton from "../CustomButton";
import "./styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TOT CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
