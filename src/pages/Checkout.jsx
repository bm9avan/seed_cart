import React, { useContext } from "react";
import { CartContextData } from "../store/cart-context";
import "./Checkout.css";
import CartBody from "../components/cart/CartBody";
import Form from "../components/form/Form";

const Checkout = () => {
  const ctx = useContext(CartContextData);

  return (
    <div>
      <h2>CheckOut</h2>
      <CartBody />
      <h4>Total Price : ₹{ctx.totalPrice} </h4>
      <div className="footer">
        <p className="note">
          This page is not real. It is created for practice purpose.
        </p>
        <Form />
        <div className="link">
          <a href="http://github.com/bm9avan">My Github profile</a>
          <a href="http://bm9avan.bio.link">Connect with me</a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
