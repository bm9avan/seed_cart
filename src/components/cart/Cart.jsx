import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import { GiCancel } from "react-icons/gi";

const CartView = ({ onCancel }) => {
    const [cartData, setCartdata] = useState([])
    function triggerHideHandler() {
        onCancel()
    }
    return (
        <div className={styles.backdrop}>
            <div className={styles.box}>
                <GiCancel className={styles.cancel} onClick={triggerHideHandler} />
                <ul>
                    {cartData.map((eachItem) => {
                        return <li>
                            {eachItem.title}
                            {eachItem.price}
                            {eachItem.qty}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}


const Cart = ({ onCancel }) => {
    return (
        <div>
            {ReactDOM.createPortal(<CartView onCancel={onCancel} />, document.getElementById('cartView'))}
        </div>
    )
}

export default Cart