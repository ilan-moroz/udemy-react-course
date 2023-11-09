import Cart from './components/Cart';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import { UserProgContextProvider } from './store/UserProgContext';

function App() {
  return (
    <UserProgContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgContextProvider>
  );
}

export default App;
