import React, { useContext } from "react";
import { ContextApi } from "../contextApi/ContextApi";
import "./quantity.css";

const Quantity = ({ id }) => {
  const { incQuantity, decQuantity, cartItem } = useContext(ContextApi);

  return (
    <span className="quantityBtn">
      <button
        disabled={cartItem.find((el) => el.id === id).quantity === 0}
        onClick={() => decQuantity(id)}
      >
        -
      </button>
      <h4 className="quantity">
        {cartItem.find((el) => el.id === id).quantity}
      </h4>
      <button onClick={() => incQuantity(id)}>+</button>
    </span>
  );
};

export default Quantity;
