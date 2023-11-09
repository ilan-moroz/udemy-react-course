import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input';
import Button from './UI/Button';
import { UserProgContext } from '../store/UserProgContext';

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgContext);

  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleClose = () => {
    userCtx.hideCheckout();
  };

  const handleSubmit = e => {
    e.preventDefault();

    const fData = new FormData(e.target);
    const data = Object.fromEntries(fData.entries());

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: data,
        },
      }),
    });
  };

  return (
    <Modal open={userCtx.progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input type='text' label='Full Name' id='name' />
        <Input type='email' label='Email Address' id='email' />
        <Input type='text' label='Street' id='street' />
        <div className='control-row'>
          <Input type='text' label='Postal Code' id='postal-code' />
          <Input type='text' label='City' id='city' />
        </div>
        <p className='modal-actions'>
          <Button textOnly type='button' onClick={handleClose}>
            Close
          </Button>
          <Button>submit order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
