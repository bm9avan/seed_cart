import React, { useReducer } from 'react'

export const CartContextData = React.createContext({
    cartData: [],
    cartHandler: () => { }
})

const CartContext = (props) => {
    const [cartDataState, dispatch] = useReducer((prevData, action) => {
        let i = -1;
        let newData = prevData.filter((eachItem) => {
            if (eachItem.title === action.title) {
                console.log('before', eachItem.qty, typeof (eachItem.qty))
                i = 1
                eachItem.qty += action.qty
                console.log('befire after', eachItem.qty, typeof (eachItem.qty))
                eachItem.qty = eachItem.qty <= 5 ? eachItem.qty : 5
                console.log('after', eachItem.qty)
            }
            return eachItem
        })
        console.log('before')
        if (i > 0) {
            return [...newData]
        }
        return [...prevData, action]
    }, [])

    function cartDataHandler(newItem) {
        dispatch(newItem)
    }
    return (
        <CartContextData.Provider value={{
            cartData: cartDataState,
            onAddingToCart: cartDataHandler
        }} >
            {props.children}
        </CartContextData.Provider>
    )
}

export default CartContext

