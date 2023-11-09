import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { UserProgContext } from '../store/UserProgContext';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgContext);

  const totalCartItems = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleShowCart = () => {
    userCtx.showCart();
  };

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt='restaurant' />
        <h1>MorozFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
