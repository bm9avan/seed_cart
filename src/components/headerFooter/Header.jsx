import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { BiCart } from "react-icons/bi";
import seedLand from "../../assests/seedLand.jpg";
import Cart from "../cart/Cart";
import { CartContextData } from "../../store/cart-context";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [inout, setInout] = useState(false);
  function hideCartHandler() {
    setShowCart(false);
  }
  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/checkout") {
      setInout(true);
    } else {
      setInout(false);
    }
  }, [location.pathname]);
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
          {!inout && (
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
          )}
          {inout && (
            <button
              className={styles.btn}
              onClick={() => {
                navigate("/");
              }}
            >
              <span className={styles.cartText}> Home </span>
            </button>
          )}
        </header>
        {!inout && (
          <img
            src={seedLand}
            alt="person seeding seeds"
            className={styles.headImg}
          />
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Header;
