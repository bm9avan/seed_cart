import React, { useState } from 'react'
import styles from './Seeds.module.css'

const EachSeed = ({ seed }) => {
    const [qty, setQty] = useState(1)
    return (
        <div className={styles.seedCard}>
            <span className={styles.price}>₹{seed.price}</span>
            <h2>{seed.title}</h2>
            <p>{seed.description}</p>
            <br />
            <div>
                <input type="number" id={'no' + seed.Id} min={1} max={5} defaultValue={qty} className={styles.no} onChange={(event) => { setQty(event.target.value) }} />
                <button className={styles.btn} onClick={() => { console.log({ Id: seed.Id, title: seed.title, price: seed.price, qty }) }}> + Add</button>
            </div>
        </div>
    )
}

export default EachSeed