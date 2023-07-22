import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCart from "./Page/ProductsListPage/ProductCart";
import CartItem from "./Page/AddToCartPage/CartItem";
import ProductDetailCart from "./Page/ProductDetailsPage/ProductDetailCart";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductCart />} />
      <Route path="/:productId" element={<ProductDetailCart />} />
      <Route path="/cartPage" element={<CartItem />} />
    </Routes>
  );
}
