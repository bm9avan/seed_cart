import React, { useContext, useState } from 'react'
import styles from './Cart.module.css'
import { CartContextData } from '../../store/cart-context'

const EachCartItem = ({ eachItem }) => {
    const ctx = useContext(CartContextData)
    const [qty, setQty] = useState(eachItem.qty)
    const [saveDis, setSaveDis] = useState(false)

    return (
        <li className={styles.seed}>
            <h3 className={styles.title}>{eachItem.title}</h3>
            <span className={styles.qty}>
                <input id={'num' + eachItem.Id} type="number" value={qty} min={0} max={5} onChange={(e) => {
                    setQty(parseInt(e.target.value))
                    setSaveDis(true)
                }} />
                {saveDis && <button className={styles.btn} onClick={() => {
                    setSaveDis(false);
                    if (qty > eachItem.qty) {
                        //we pass number of qty need to be increased
                        ctx.onAddingToCart({ Id: eachItem.Id, title: eachItem.title, price: eachItem.price, qty: (qty - eachItem.qty) })
                    }
                    if (qty < eachItem.qty) {
                        // we pass directly result number of qty to be displayed  
                        ctx.onRemovingFromCart({ Id: eachItem.Id, title: eachItem.title, price: eachItem.price, qty })
                    }
                }}>Save</button>}
            </span>
            <span className={styles.price}>₹{eachItem.price}</span>
        </li>
    )
}

export default EachCartItem
