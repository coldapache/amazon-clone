import React, { useContext} from "react";
import "./Product.css";
import { CartContext } from './CartContext';

function Product(props) {

  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const product ={title: props.title, price: props.price, image: props.image}
    setCart(currentCart => [...currentCart, product]);
    //... destructures the array, essentially we are making a copy of currentCart
  }

  return (
    <div className="product">
      <img src={props.image} alt="" />
      <div className="product__info">
        <div className="product___price">
          <small>$</small>
          <strong>{props.price}</strong>
        </div>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <h4 className="product__title">{props.title}</h4>
      </div>

      <div className="product__buttonBasket">
        <button className="product__addToCartButton" onClick={addToCart}>Add to Cart</button>
        <button className="product__buyNowButton">Buy Now</button>
      </div>
    </div>
  );
}

export default Product;
