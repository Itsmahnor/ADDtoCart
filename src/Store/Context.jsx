import { createContext } from "react";

export const  UseContextInCart=createContext();

const name="Mahnoor"
const MainContext=({children})=>{
  return(
<UseContextInCart.Provider value={name}   >
  {children}
</UseContextInCart.Provider>
  )

}

export default MainContext;