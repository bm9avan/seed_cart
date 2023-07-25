import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import { GiCancel } from "react-icons/gi";
import { CartContextData } from "../../store/cart-context";
import EachCartItem from "./EachCartItem";

const CartView = ({ onCancel }) => {
  const ctx = useContext(CartContextData);
    
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
        <ul className={styles.ul}>
          {!ctx.cartData.length && (
            <h3 className={styles.seed}> no items added!</h3>
          )}
          {ctx.cartData.map((eachItem) => {
            return (
              <EachCartItem key={"cart" + eachItem.id} eachItem={eachItem} />
            );
          })}
        </ul>
        <div className={styles.buttom}>
          <h4 className={styles.total}>Total Price : ₹{ctx.totalPrice} </h4>
          {ctx.totalPrice !== 0 && (
            <button className={styles.btn} >CheckOut </button>
          )}
          {ctx.totalPrice === 0 && (
            <button className={styles.btn} onClick={onCancel}>
              Add Items
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
