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
        if (action.type === 'add') {
            //map function cart array
            let newData = prevData.arrayData.filter((eachItem) => {
                if (eachItem.title === action.newItem.title) {
                    console.log('before', eachItem.qty, typeof (eachItem.qty))
                    i = 1
                    let prevQty = eachItem.qty;
                    eachItem.qty += action.newItem.qty
                    console.log('befire after', eachItem.qty, typeof (eachItem.qty))
                    eachItem.qty = eachItem.qty <= 5 ? eachItem.qty : 5
                    console.log('after', eachItem.qty)
                    if (prevQty !== eachItem.qty) {
                        noOfItems += (eachItem.qty - prevQty)
                        totalPrice += (eachItem.qty - prevQty) * (eachItem.price)
                    }
                }
                return eachItem
            })
            console.log('before')
            if (i > 0) {
                return { arrayData: [...newData], totalPrice, noOfItems }
            }
            return { arrayData: [...prevData.arrayData, action.newItem], totalPrice: (totalPrice + (action.newItem.price * action.newItem.qty)), noOfItems: (noOfItems + action.newItem.qty) }
        }
        if (action.type === 'remove') {
            let newData = prevData.arrayData.filter((eachItem) => {
                if (eachItem.Id === action.removeItem.Id) {
                    let prevQty = eachItem.qty;
                    eachItem.qty = action.removeItem.qty
                    console.log('befire after', eachItem.qty, typeof (eachItem.qty), 'action.removeItem.Id', action.removeItem.Id)
                    console.log('after', eachItem.qty)
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
            console.log('before')
            return { arrayData: [...newData], totalPrice, noOfItems }
        }
    }, { arrayData: [], totalPrice: 0, noOfItems: 0 })

    function addCartDataHandler(newItem) {
        dispatch({ type: 'add', newItem })
    }

    function removeCartDataHandler(removeItem) {
        dispatch({ type: 'remove', removeItem })
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