import { createContext, useState } from 'react';

export const UserProgContext = createContext({
  progress: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgContextProvider = ({ children }) => {
  const [userProg, setUserProg] = useState('');

  const showCart = () => {
    setUserProg('cart');
  };

  const hideCart = () => {
    setUserProg('');
  };

  const showCheckout = () => {
    setUserProg('checkout');
  };

  const hideCheckout = () => {
    setUserProg('');
  };

  const userProgCtx = {
    progress: userProg,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgContext.Provider value={userProgCtx}>
      {children}
    </UserProgContext.Provider>
  );
};
