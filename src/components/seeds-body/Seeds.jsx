import React, { useState, useEffect } from 'react'
import styles from './Seeds.module.css'
import EachSeed from './EachSeed';
import useHttp from '../../hooks/use-http';
import Spinner from '../../UI/Spinner'

const Seeds = () => {
    const [seedData, setSeedData] = useState([])
    const { isLoading, error, fetchHandler: getData } = useHttp()

    function refacter(data) {
        if (data) {
            let arr = Object.keys(data).reverse().map((each) => {
                return {
                    id: each,
                    title: data[each].title,
                    price: data[each].price,
                    description: data[each].description,
                    availableQty: data[each].availableQty
                }
            })
            setSeedData(arr)
        }
    }

    useEffect(() => {
        getData({ url: `${process.env.REACT_APP_API_URL}/seeds.json` }, (data) => refacter(data))
    }, [getData])

    return (
        <div className={styles.seedShop}>
            <div className={styles.summary}>
                <h1>Welcome to our SeedCart!</h1>
                <code>Welcome to our online seed shop! Explore our wide range of high-quality seeds and discover the joy of growing your own plants. Whether you're a seasoned gardener or just starting out, we have the perfect seeds for you. Happy shopping and happy gardening!</code>
            </div>
            <br />
            <br />
            <br />
            {isLoading && <Spinner />}
            {error && <h2 style={{color: "red"}}>Error in Loading data</h2>}
            <div className={styles.seedContainer}>
                {seedData.length !== 0 && seedData.map(seed => (
                    <EachSeed key={seed.id} seed={seed} />
                ))}
            </div>
        </div>
    )
}

export default Seeds
