import { createContext, useState } from "react";
import cartdata from '../Component/Cartdata.json';

export const UseContextInCart = createContext();

const MainContext = ({ children }) => {
  const [cartvalue, setcart] = useState([]);
  const [cartCount, setCartCount] = useState(0); 
  const[Price,setPrice]=useState(0);

  const handlesetcart = (id) => {
    const newArr = cartdata.find((item) => item.id === id);
    if (newArr) {
      setcart((prev) => [...prev, newArr]);
      setCartCount(prevCount => prevCount + 1);
     
      setPrice((prev) => Number((prev + newArr.price).toFixed(2)));
    }
  };

  return (
    <UseContextInCart.Provider value={{ cartvalue, handlesetcart, cartCount,Price }}>
      {children}
    </UseContextInCart.Provider>
  );
};

export default MainContext;
