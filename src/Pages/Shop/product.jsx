import { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";
export const Product = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={image} alt="No-img-found" />
      <div className="description">
        <h3>
          {id}.{name}
        </h3>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        <b>
          Add to Cart
          {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </b>
      </button>
    </div>
  );
};
