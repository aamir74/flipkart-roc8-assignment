import React from "react";
import { useCart } from "../../hooks/cart-context";

const Card = (props) => {
  const { id, image, name, rating, price, product } = props;
  const {  cartDispatch } = useCart();

  const handleCart = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  return (
    <div className="card card-with-text" key={id}>
      <img className="card-img" src={image} alt="product"/>

      <span
      // onClick={() => handleWishlist(product)}
      >
        <i
          className="fa fa-heart badge-btn top-right empty"
          aria-hidden="true"
          title="Add to Wishlist"
        ></i>
      </span>
      <div className="card-details margin-fix">
        <span className="rating">
          <h3 className="card-text-title">{name}</h3>{" "}
          <div className="rating-icon">
            <p className="bold desc">{rating}</p>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        </span>
        <p className="desc bold">Only {price}/- Rs</p>
      </div>
      <div className="card-btn">
        <button
          className="btn-primary btn-bg-color left-margin bold"
          onClick={() => handleCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { Card };
