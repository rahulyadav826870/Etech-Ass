import { createContext, useEffect, useState } from "react";

export const ContextApi = createContext(null);

const ContextApiProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(getItem);
  }, []);

  function addProductItem(item) {
    setCartItem([...cartItem, item]);
    localStorage.setItem("cart", JSON.stringify([...cartItem, item]));
    // console.log(item)
    // alert("This product add in your cart");
  }
  function removeProductItem(id) {
    // console.log(id)
    const removeList = cartItem.filter((ele) => ele.id !== id);
    //   console.log("removeList: ", removeList);
    setCartItem(removeList);
    localStorage.setItem("cart", JSON.stringify(removeList));
  }

  function incQuantity(id) {
    console.log(id);
    const updateQuantity = cartItem.map((ele) => {
      if (ele.id === id) {
        return { ...ele, quantity: ele.quantity + 1 };
      } else {
        return ele;
      }
    });
    setCartItem(updateQuantity);
    localStorage.setItem("cart", JSON.stringify(updateQuantity));
  }
  function decQuantity(id) {
    // console.log(id);
    if (cartItem.find((el) => el.id === id).quantity == 1) {
      removeProductItem(id);
    } else {
      const updateQuantity = cartItem.map((ele) => {
        if (ele.id === id) {
          return { ...ele, quantity: ele.quantity - 1 };
        } else {
          return ele;
        }
      });
      setCartItem(updateQuantity);
      localStorage.setItem("cart", JSON.stringify(updateQuantity));
    }
  }

  return (
    <ContextApi.Provider
      value={{
        cartItem,
        addProductItem,
        removeProductItem,
        incQuantity,
        decQuantity,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApiProvider;
