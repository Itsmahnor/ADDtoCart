import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Component/Home";
import NaVBAR from "./Component/Navbar";
import MainContext from "./Store/Context";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DisplayResult from "./Component/Display";


function App() {
  const router=createBrowserRouter([
  
    {
      path:"/",
      element:(<><NaVBAR/> <Homepage />   </>)
    },
    {
      path:"/cart",
      element:<><NaVBAR /> <DisplayResult />  </>
    }
  ]);
  return (
  
    <RouterProvider router={router} />
    );

 
  
}

export default App;
