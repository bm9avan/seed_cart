import React, { useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContextData = React.createContext({
  cartData: [],
  onAddingToCart: () => {},
  onRemovingFromCart: () => {},
  totalPrice: 0,
  noOfItems: 0,
});

const notify = (message, theme, hideProgressBar) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme,
  });
};

const CartContext = (props) => {
  const [cartDataState, dispatch] = useReducer(
    (prevData, action) => {
      let arrayData = prevData.arrayData,
        totalPrice = prevData.totalPrice,
        noOfItems = prevData.noOfItems;
      if (action.type === "ADD") {
        let indexToIncrease = arrayData.findIndex((item) => {
          if (item.id === action.newItem.id) {
            return true;
          }
          return false;
        });
        if (indexToIncrease !== -1) {
          let prevQty = arrayData[indexToIncrease].qty;
          let substractQty = prevQty;
          arrayData[indexToIncrease].qty += action.newItem.qty;
          if (arrayData[indexToIncrease].qty > 5) {
            notify("Max 5 item per order");
            substractQty = prevQty + arrayData[indexToIncrease].qty - 5;
            arrayData[indexToIncrease].qty = 5;
          }
          if (prevQty === arrayData[indexToIncrease].qty) {
            return { arrayData, totalPrice, noOfItems };
          }
          notify("Cart updated!", "colored");
          totalPrice +=
            (arrayData[indexToIncrease].qty - substractQty) *
            arrayData[indexToIncrease].price;
          noOfItems += arrayData[indexToIncrease].qty - substractQty;
          return { arrayData, totalPrice, noOfItems };
        }
        notify("Item added to cart!", "colored");
        return {
          arrayData: [...prevData.arrayData, action.newItem],
          totalPrice: totalPrice + action.newItem.price * action.newItem.qty,
          noOfItems: noOfItems + action.newItem.qty,
        };
      }
      if (action.type === "REMOVE") {
        let indexToDecrease = arrayData.findIndex((item) => {
          if (item.id === action.removeItem.id) {
            return true;
          }
          return false;
        });
        let prevQty = arrayData[indexToDecrease].qty;
        arrayData[indexToDecrease].qty = action.removeItem.qty;
        if (arrayData[indexToDecrease].qty === 0) {
          noOfItems -= prevQty;
          totalPrice -= prevQty * arrayData[indexToDecrease].price;
          arrayData.splice(indexToDecrease, 1);
          notify("Item removed from cart!", undefined, true);
          return { arrayData, totalPrice, noOfItems };
        }
        if (arrayData[indexToDecrease].qty !== 0) {
          noOfItems += arrayData[indexToDecrease].qty - prevQty;
          totalPrice +=
            (arrayData[indexToDecrease].qty - prevQty) *
            arrayData[indexToDecrease].price;
          notify("Item decresed from cart!", undefined, true);
        }
        return { arrayData, totalPrice, noOfItems };
      }
    },
    { arrayData: [], totalPrice: 0, noOfItems: 0 }
  );

  function addCartDataHandler(newItem) {
    dispatch({ type: "ADD", newItem });
  }

  function removeCartDataHandler(removeItem) {
    dispatch({ type: "REMOVE", removeItem });
  }
  return (
    <CartContextData.Provider
      value={{
        cartData: cartDataState.arrayData,
        onAddingToCart: addCartDataHandler,
        onRemovingFromCart: removeCartDataHandler,
        totalPrice: cartDataState.totalPrice,
        noOfItems: cartDataState.noOfItems,
      }}
    >
      <ToastContainer />
      {props.children}
    </CartContextData.Provider>
  );
};

export default CartContext;
