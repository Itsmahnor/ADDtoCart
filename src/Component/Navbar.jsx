import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function NaVBAR() {
  return ( 
    <nav class="navbar bg-body-tertiary p-4">
    <div class="container-fluid justify-content-center gap-10">
      <Link to="/" class="btn btn-outline-success me-2" >Home</Link>
     <div className="relative">
  <FaShoppingCart className="text-[3rem] " />
  <p className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">0</p>
</div>
<Link to="/cart" class="btn btn-outline-success me-2">Carts</Link>

    </div>
  </nav>
   );
}

export default NaVBAR;