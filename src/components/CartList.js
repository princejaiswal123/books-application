import { useEffect, useState } from "react";
import "../App.css";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <div>
      {CART?.map((cartItem, id, cartindex) => {
        return (
          <div key={id}>
            <img src={cartItem.url} width={40} />
            <span> {cartItem.name} </span>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
