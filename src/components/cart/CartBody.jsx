import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContextData } from "../../store/cart-context";
import EachCartItem from "./EachCartItem";

const CartBody = () => {
  const ctx = useContext(CartContextData);
  return (
    <>
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
    </>
  );
};

export default CartBody;
