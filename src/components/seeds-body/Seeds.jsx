import React from 'react'
import styles from './Seeds.module.css'
import EachSeed from './EachSeed';

const Seeds = ({ onAddingToCart }) => {
    const seedData = [
        {
            Id: "s01",
            title: "Tomato Seeds",
            description: "High-quality tomato seeds for a bountiful harvest",
            price: 59,
            availableQty: 63
        },
        {
            Id: "s02",
            title: "Lettuce Seeds",
            description: "Fresh and crispy lettuce seeds for your garden",
            price: 29,
            availableQty: 45
        },
        {
            Id: "s03",
            title: "Carrot Seeds",
            description: "Sow these carrot seeds for homegrown goodness",
            price: 39,
            availableQty: 80
        },
        {
            Id: "s04",
            title: "Basil Seeds",
            description: "Aromatic basil seeds for adding flavor to your dishes",
            price: 19,
            availableQty: 55
        },
        {
            Id: "s05",
            title: "Sunflower Seeds",
            description: "Bright and cheerful sunflower seeds for your garden",
            price: 15,
            availableQty: 37
        },
        {
            Id: "s06",
            title: "Cucumber Seeds",
            description: "Crunchy cucumber seeds for refreshing salads",
            price: 49,
            availableQty: 68
        },
        {
            Id: "s07",
            title: "Spinach Seeds",
            description: "Nutritious spinach seeds for healthy meals",
            price: 25,
            availableQty: 52
        },
        {
            Id: "s08",
            title: "Chili Pepper Seeds",
            description: "Spicy chili pepper seeds for adding heat to your dishes",
            price: 35,
            availableQty: 42
        },
        {
            Id: "s09",
            title: "Zinnia Seeds",
            description: "Vibrant zinnia flower seeds for a colorful garden",
            price: 12,
            availableQty: 24
        },
        {
            Id: "s10",
            title: "Bean Seeds",
            description: "Healthy and delicious bean seeds for your garden",
            price: 22,
            availableQty: 60
        },
        {
            Id: "s11",
            title: "Radish Seeds",
            description: "Crunchy radish seeds for quick and easy growing",
            price: 18,
            availableQty: 47
        },
        {
            Id: "s12",
            title: "Watermelon Seeds",
            description: "Juicy watermelon seeds for sweet summer treats",
            price: 32,
            availableQty: 39
        },
        {
            Id: "s13",
            title: "Pea Seeds",
            description: "Tasty pea seeds for garden-fresh goodness",
            price: 28,
            availableQty: 56
        },
        {
            Id: "s14",
            title: "Marigold Seeds",
            description: "Beautiful marigold flower seeds for a vibrant garden",
            price: 14,
            availableQty: 32
        },
        {
            Id: "s15",
            title: "Broccoli Seeds",
            description: "Nutritious broccoli seeds for healthy meals",
            price: 42,
            availableQty: 43
        },
        {
            Id: "s16",
            title: "Beetroot Seeds",
            description: "Sweet and earthy beetroot seeds for your garden",
            price: 27,
            availableQty: 50
        },
        {
            Id: "s17",
            title: "Rosemary Seeds",
            description: "Aromatic rosemary seeds for culinary and medicinal use",
            price: 16,
            availableQty: 29
        },
        {
            Id: "s18",
            title: "Cauliflower Seeds",
            description: "Versatile cauliflower seeds for various culinary dishes",
            price: 38,
            availableQty: 34
        },
        {
            Id: "s19",
            title: "Lavender Seeds",
            description: "Fragrant lavender seeds for a soothing garden",
            price: 20,
            availableQty: 41
        },
        {
            Id: "s20",
            title: "Pumpkin Seeds",
            description: "Giant pumpkin seeds for fun and festive fall decorations",
            price: 30,
            availableQty: 26
        }
    ];

    return (
        <div className={styles.seedShop}>
            <div className={styles.summary}>
                <h1>Welcome to our SeedCart!</h1>
                <code>Welcome to our online seed shop! Explore our wide range of high-quality seeds and discover the joy of growing your own plants. Whether you're a seasoned gardener or just starting out, we have the perfect seeds for you. Happy shopping and happy gardening!</code>
            </div>
            <br />
            <br />
            <br />
            <div className={styles.seedContainer}>
                {seedData.map(seed => (
                    <EachSeed key={seed.Id} seed={seed} onAddingToCart={onAddingToCart} />
                ))}
            </div>
        </div>
    )
}

export default Seeds
