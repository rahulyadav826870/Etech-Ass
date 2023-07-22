import React, { useState } from "react";
import jsonData from "../../../jsonData.json";
import style from "./product.module.css";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ProductCart() {
  const [productData, setProductData] = useState(jsonData);

  return (
    <>
      <div className={style["product"]}>
        {productData?.map((el) => {
          return (
            <div className={style["productList"]} key={el.id}>
              <Link to={`/${el.id}`}>
                <div className={style["image"]}>
                  <img src={el.image} alt={el.category} />
                </div>
                <h4>{el.title}</h4>
                <div className={style["price"]}>
                  <BiDollar size={20} />
                  <p>{el.price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
