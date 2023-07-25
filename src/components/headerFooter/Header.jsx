import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { BiCart } from "react-icons/bi";
import seedLand from "../../assests/seedLand.jpg";
import Cart from "../cart/Cart";
import { CartContextData } from "../../store/cart-context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  function hideCartHandler() {
    setShowCart(false);
  }
  const ctx = useContext(CartContextData);
  return (
    <>
      {showCart && <Cart onCancel={hideCartHandler} />}
      <div className={styles.outer}>
        <header className={styles.header}>
          <p>
            <code>SeedCart:</code> Your Gateway to{" "}
            <span className={styles.green}>Green</span>
          </p>
          <button
            className={styles.btn}
            onClick={() => {
              setShowCart(true);
            }}
          >
            <span className={styles.cartLogo}>
              <BiCart />
            </span>
            <span className={styles.cartText}> MyCart </span>
            <span className={styles.cartNo}>{ctx.noOfItems}</span>
          </button>
        </header>
        <img
          src={seedLand}
          alt="person seeding seeds"
          className={styles.headImg}
        />
      </div>
    </>
  );
};

export default Header;
