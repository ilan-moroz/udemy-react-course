import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce(
    (cur, item) => cur + +item.amount,
    0
  );

  const [btnAnimate, setBtnAnimate] = useState(false);

  const btnClasses = `${classes.button} ${btnAnimate ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnAnimate(true);

    const timer = setTimeout(() => {
      setBtnAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
