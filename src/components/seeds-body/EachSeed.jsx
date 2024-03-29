import React, { useState, useContext } from "react";
import styles from "./Seeds.module.css";
import { CartContextData } from "../../store/cart-context";

const EachSeed = ({ seed }) => {
  const ctx = useContext(CartContextData);

  const [qty, setQty] = useState(1);
  return (
    <div className={styles.seedCard}>
      <span className={styles.price}>₹{seed.price}</span>
      <h2>{seed.title}</h2>
      <p>{seed.description}</p>
      <br />
      <div>
        <input
          type="number"
          value={qty}
          id={"no" + seed.id}
          min={1}
          max={5}
          className={styles.no}
          onChange={(event) => {
            setQty(parseInt(event.target.value));
          }}
        />
        <button
          className={styles.btn}
          onClick={() => {
            ctx.onAddingToCart({
              id: seed.id,
              title: seed.title,
              price: seed.price,
              qty,
            });
            setQty(1);
          }}
        >
          {" "}
          + Add
        </button>
      </div>
    </div>
  );
};

export default EachSeed;
