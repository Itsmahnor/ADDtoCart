import { useContext } from "react";
import { UseContextInCart } from "../Store/Context";
import CartData from './Cartdata.json'

function Homepage() {
  const name=useContext(UseContextInCart)
  return ( 
  <>
   <div className="m-32 flex justify-around">
  {
CartData.map((item)=>
  (
    <div class="card" style={{ width: "18rem" }}>
    <img src={item.image} class="card-img-top w-100 h-[20vh] object-contain" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <p class="card-text">{item.description}</p>
      <p>${item.price}</p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>
  ))
}
  
</div>
  </>
   );
}

export default Homepage;