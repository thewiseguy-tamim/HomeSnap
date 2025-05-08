import { createContext } from "react";
import useCartContext from "../Hooks/useCartContext";



const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartValues = useCartContext();
  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
};

export default CartContext;
