import { createContext } from "react";
import useCart from "../Hooks/useCart";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartValues = useCart();
  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
};

export default CartContext;