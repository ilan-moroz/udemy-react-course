import CartContext from "./cart-context";
import { useReducer } from "react";

const INITIAL_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: +existingCartItem.amount + +action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE_ITEM":
      const existingCartItemIndex2 = state.items.findIndex(
        item => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex2];

      const updatedTotalAmount2 = state.totalAmount - existingItem.price;

      let updatedItems2;
      if (existingItem.amount === 1) {
        updatedItems2 = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems2 = [...state.items];
        updatedItems2[existingCartItemIndex2] = updatedItem;
      }

      return {
        items: updatedItems2,
        totalAmount: updatedTotalAmount2,
      };

    default:
      return INITIAL_STATE;
  }
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const addItemToCart = item => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemFromCart = id => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
