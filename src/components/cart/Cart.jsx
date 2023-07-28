import React, { useContext } from "react";
import { CartContextData } from "../../store/cart-context";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import { GiCancel } from "react-icons/gi";
import CartBody from "./CartBody";
import { useNavigate } from "react-router-dom";

const CartView = ({ onCancel }) => {
  const ctx = useContext(CartContextData);
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.backdrop} onClick={onCancel}></div>
      <div
        className={`${styles.box} ${
          ctx.cartData.length >= 8 ? styles.scroll : ""
        }`}
      >
        <h2>My Cart</h2>
        <GiCancel className={styles.cancel} onClick={onCancel} />
        <CartBody />
        <div className={styles.buttom}>
          <h4 className={styles.total}>Total Price : ₹{ctx.totalPrice} </h4>
          {ctx.totalPrice !== 0 && (
            <button
              className={styles.btn}
              onClick={() => {
                navigate("/checkout");
                onCancel();
              }}
            >
              {" "}
              CheckOut{" "}
            </button>
          )}
          {ctx.totalPrice === 0 && (
            <button className={styles.btn} onClick={onCancel}>
              Your cart is Empty ! Add Items
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Cart = ({ onCancel, cartData }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <CartView onCancel={onCancel} cartData={cartData} />,
        document.getElementById("cartView")
      )}
    </div>
  );
};

export default Cart;
