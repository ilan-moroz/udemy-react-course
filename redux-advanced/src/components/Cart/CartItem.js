import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";

const CartItem = props => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const addOrRemoveCartItem = method => {
    if (method === "add") {
      dispatch(
        cartActions.addToCart({
          id,
          title,
          price,
        })
      );
    } else {
      dispatch(cartActions.removeFromCart(id));
    }
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => addOrRemoveCartItem("remove")}>-</button>
          <button onClick={() => addOrRemoveCartItem("add")}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
