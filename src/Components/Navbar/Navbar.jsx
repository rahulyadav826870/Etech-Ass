import React, { useContext } from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import { ContextApi } from "../contextApi/ContextApi";


export default function Navbar() {
  const { cartItem } = useContext(ContextApi);
  // console.log(cartItem);
  return (
    <div className={style["container"]}>
      <Link to={"/"}>
        {" "}
        <p>E-Commerce</p>
      </Link>

      <div>
        <ul>
          <Link to={"/"}>
            <li>Shopping</li>
          </Link>
          <Link to={"/cartPage"}>
            <li>
              Cart{" "}
              {cartItem.length > 0 && (
                <span className={style["cartLength"]}>{cartItem.length}</span>
              )}{" "}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
