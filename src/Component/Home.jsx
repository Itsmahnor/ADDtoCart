import { useContext } from "react";
import { UseContextInCart } from "../Store/Context";
import CartData from './Cartdata.json';

function Homepage() {
  const { handlesetcart } = useContext(UseContextInCart);

  return (
    <>
      <div className="m-32 flex justify-around">
        {CartData.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img
              src={item.image}
              className="card-img-top w-100 h-[20vh] object-contain"
              alt={item.name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p>${item.price}</p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => handlesetcart(item.id)}
              >
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Homepage;
