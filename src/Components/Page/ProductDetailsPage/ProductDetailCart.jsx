import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../../jsonData.json";
import style from "./productDetailsCart.module.css";
import { ContextApi } from "../../contextApi/ContextApi";
import Quantity from "../../Quantity/QuantityButton.jsx";
import { BiDollar } from "react-icons/bi";

export default function ProductDetailCart() {
  const [productDetailCart, setProductDetailCart] = useState([]);
  const param = useParams();
  const { addProductItem, cartItem, incQuant } = useContext(ContextApi);
  useEffect(() => {
    const product = jsonData.find((ele) => ele.id == param.productId);
    // console.log(product)
    setProductDetailCart(product);
  }, []);

  return (
    <div className={style["SingleProductWrapper"]}>
      <div className={style["productDetailCartImg"]}>
        <img src={productDetailCart.image} alt="" />
      </div>
      <div className={style["details"]}>
        <h3>{productDetailCart.title}</h3>
        <p className={style["desc"]}>{productDetailCart.description}</p>
        <div className={style["price"]}>
          <BiDollar size={26} />
          <p>{Math.floor(productDetailCart.price)}</p>
        </div>

        {cartItem.length > 0 &&
        cartItem.findIndex((ele) => ele.id === productDetailCart.id) > -1 ? (
          <Quantity id={productDetailCart.id} />
        ) : (
          <button
            className={style["addToCartBtn"]}
            onClick={() => addProductItem(productDetailCart)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
