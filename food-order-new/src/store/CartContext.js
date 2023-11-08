import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: item => {},
  removeItem: id => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.id
      );
      const updatedItems = [...state.items];
      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        const updateItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[(existingItemIndex = updateItem)];
      } else updatedItems.push({ ...action.item, quantity: 1 });
      return updatedItems;
    case 'REMOVE_ITEM':
      return;
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartContext;
