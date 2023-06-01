import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import { GiCancel } from "react-icons/gi";
import { CartContextData } from '../../store/cart-context';

const CartView = ({ onCancel }) => {
    const ctx = useContext(CartContextData)

    function triggerHideHandler() {
        onCancel()
    }
    return (
        <div>
            <div className={styles.backdrop} onClick={triggerHideHandler}></div>
            <div className={styles.box}>
                <h2>My Cart</h2>
                <GiCancel className={styles.cancel} onClick={triggerHideHandler} />
                <ul className={styles.ul}>
                    {ctx.cartData.map((eachItem) => {
                        return <li key={'cart' + eachItem.Id} className={styles.seed}>
                            <h3 className={styles.title}>{eachItem.title}</h3>
                            <span className={styles.qty}>{eachItem.qty}</span>
                            <span className={styles.price}>₹{eachItem.price}</span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}


const Cart = ({ onCancel, cartData }) => {
    return (
        <div>
            {ReactDOM.createPortal(<CartView onCancel={onCancel} cartData={cartData} />, document.getElementById('cartView'))}
        </div>
    )
}

export default Cart