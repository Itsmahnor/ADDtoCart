import { useContext } from "react";
import { UseContextInCart } from "../Store/Context";

function Homepage() {
  const name=useContext(UseContextInCart)
  return ( 
   <h1>hello</h1>
   );
}

export default Homepage;