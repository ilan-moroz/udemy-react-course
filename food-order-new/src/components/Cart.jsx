import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import { UserProgContext } from '../store/UserProgContext';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const userCtx = useContext(UserProgContext);

  const handleCloseCart = () => {
    userCtx.hideCart();
  };
  return (
    <Modal className='cart' open={userCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
      <p className='modal-actions'>
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button>Go To Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
