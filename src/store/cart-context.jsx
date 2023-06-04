import React, { useReducer } from 'react'

export const CartContextData = React.createContext({
    cartData: [],
    onAddingToCart: () => { },
    onRemovingFromCart: () => { },
    totalPrice: 0,
    noOfItems: 0
})

const CartContext = (props) => {
    const [cartDataState, dispatch] = useReducer((prevData, action) => {
        let i = -1, totalPrice = prevData.totalPrice, noOfItems = prevData.noOfItems;
        if (action.type === 'ADD') {
            //map function cart array
            let newData = prevData.arrayData.filter((eachItem) => {
                if (eachItem.title === action.newItem.title) {
                    i = 1
                    let prevQty = eachItem.qty;
                    eachItem.qty += action.newItem.qty
                    eachItem.qty = eachItem.qty <= 5 ? eachItem.qty : 5
                    if (prevQty !== eachItem.qty) {
                        noOfItems += (eachItem.qty - prevQty)
                        totalPrice += (eachItem.qty - prevQty) * (eachItem.price)
                    }
                }
                return eachItem
            })
            if (i > 0) {
                return { arrayData: [...newData], totalPrice, noOfItems }
            }
            return { arrayData: [...prevData.arrayData, action.newItem], totalPrice: (totalPrice + (action.newItem.price * action.newItem.qty)), noOfItems: (noOfItems + action.newItem.qty) }
        }
        if (action.type === 'REMOVE') {
            let newData = prevData.arrayData.filter((eachItem) => {
                if (eachItem.Id === action.removeItem.Id) {
                    let prevQty = eachItem.qty;
                    eachItem.qty = action.removeItem.qty
                    if (eachItem.qty === 0) {
                        noOfItems -= prevQty
                        totalPrice -= (prevQty) * (eachItem.price)
                        return false;
                    }
                    if (eachItem.qty !== 0) {
                        noOfItems += (eachItem.qty - prevQty)
                        totalPrice += (eachItem.qty - prevQty) * (eachItem.price)
                        return eachItem
                    }
                }
                return eachItem
            })
            return { arrayData: [...newData], totalPrice, noOfItems }
        }
    }, { arrayData: [], totalPrice: 0, noOfItems: 0 })

    function addCartDataHandler(newItem) {
        dispatch({ type: 'ADD', newItem })
    }

    function removeCartDataHandler(removeItem) {
        dispatch({ type: 'REMOVE', removeItem })
    }
    return (
        <CartContextData.Provider value={{
            cartData: cartDataState.arrayData,
            onAddingToCart: addCartDataHandler,
            onRemovingFromCart: removeCartDataHandler,
            totalPrice: cartDataState.totalPrice,
            noOfItems: cartDataState.noOfItems
        }} >
            {props.children}
        </CartContextData.Provider>
    )
}

export default CartContext