import React, { useContext } from "react";
import "./cartItem.css";

import { ContextApi } from "../../contextApi/ContextApi";
import Quantity from "../../Quantity/QuantityButton";

const CartItem = () => {
  const { cartItem, removeProductItem } = useContext(ContextApi);

  return (
    <div>
      <div className="cartWrapper">
        <h3>
          Cart Total Price : ${" "}
          {cartItem
            .reduce(
              (acc, cur) =>
                acc + Math.floor(cur.price) * Math.floor(cur.quantity),
              0
            )
            .toFixed(0)}
        </h3>
        {cartItem?.map((item) => (
          <div key={item.id} className="cartCard">
            <div className="cartImage">
              {" "}
              <img src={item.image} alt="" />
            </div>
            <div className="cartLeftSide">
              <h5>{item.title}</h5>
              <Quantity id={item.id} quantity={item.quantity} />
              <h5>$ {Math.floor(item.price)}</h5>
              <button
                onClick={() => removeProductItem(item.id)}
                className="remove"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
