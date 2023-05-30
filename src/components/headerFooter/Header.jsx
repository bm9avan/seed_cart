import React, { useState } from 'react'
import styles from './Header.module.css'
import { BiCart } from "react-icons/bi";
import seedLand from "../../assests/seedLand.jpg"
import Cart from '../cart/Cart';

const Header = ({ cartData }) => {
    const [showCart, setShowCart] = useState(false)
    function hideCartHandler() {
        setShowCart(false)
    }
    return (
        <>
            {showCart && <Cart onCancel={hideCartHandler} cartData={cartData} />}
            <div className={styles.outer}>
                <header className={styles.header}>
                    <p>
                        <code>SeedCart:</code> Your Gateway to <span className={styles.green}>Green</span>
                    </p>
                    <button className={styles.btn} onClick={() => { setShowCart(true) }}>
                        <span className={styles.cartLogo}><BiCart /></span>
                        <span className={styles.cartText}> MyCart </span>
                        <span className={styles.cartNo}>3</span>
                    </button>
                </header>
                <img src={seedLand} alt="person seeding seeds" className={styles.headImg} />
            </div>
        </>
    )
}

export default Header