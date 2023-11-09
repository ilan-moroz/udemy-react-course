import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: item => {},
  removeItem: id => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.item.id
      );
      const updatedItems = [...state.items];
      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        const updateItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updateItem;
      } else updatedItems.push({ ...action.item, quantity: 1 });
      return { ...state, items: updatedItems };

    case 'REMOVE_ITEM':
      const existingItemIndeX = state.items.findIndex(
        item => item.id === action.id
      );
      const existingCartItem = state.items[existingItemIndeX];
      let updateItems;
      if (existingCartItem.quantity === 1) {
        updateItems = state.items.filter(item => item.id !== action.id);
      } else {
        updateItems = [...state.items];
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updateItems[existingItemIndeX] = updatedItem;
      }
      return { ...state, items: updateItems };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = item => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const removeItem = id => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  };

  const clearCart = () => {
    dispatchCartAction({ type: 'CLEAR_CART' });
  };

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
