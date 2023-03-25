import { createContext, useContext, useEffect, useState } from "react";
import apis from "../config/apis";
const AppContext = createContext({});
export default function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = () => {
    fetch(apis.getProducts).then(response => response.json()).then(data => setProducts(data.products || []))
  }

  const handleAddProductToCart = (id) => {
    let item = cartItems[id];
    if (item) {
      item = { quantity: item.quantity + 1 };
      setCartItems({ ...cartItems, [id]: item });
    } else {
      cartItems[id] = { quantity: 1 };
      setCartItems({ ...cartItems });
    }

  }

  const handleRemoveProductFromCart = (id) => {
    let item = cartItems[id];
    if (item && item.quantity > 1) {
      item = { quantity: item.quantity - 1 };
      setCartItems({ ...cartItems, [id]: item });
    } else {
      delete cartItems[id];
      setCartItems({ ...cartItems });
    }
  }

  const getDistinctProductsCount = (id) => {
    return cartItems[id] ? cartItems[id].quantity : 0
  }

  return <AppContext.Provider value={{
    selectedItems: cartItems,
    setSelectedItems: setCartItems,
    handleRemoveProductFromCart: handleRemoveProductFromCart,
    handleAddProductToCart: handleAddProductToCart,
    products: products,
    getDistinctProductsCount: getDistinctProductsCount
  }}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);