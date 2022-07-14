import React from "react";

const Bill = ({ cart }) => {
  const cartQuantity = cart.reduce(
    (acc, curr) => acc + Number(curr.quantity),
    0
  );
  const totalPrice = cart.reduce(
    (acc, curr) => acc + Number(curr.price * curr.quantity),
    0
  );
  const totalDiscount = Math.round(
    cart.reduce(
      (acc, curr) =>
        acc +
        Number(((curr.price * curr.discountPercentage) / 100) * curr.quantity),
      0
    )
  );

  return (
    <div className="pricing">
      <p className="h5 bold">Price Details</p>
      <hr />
      <div className="price-details">
        <p className="desc ">Price({cartQuantity} items)</p>
        <p className="desc">₹{totalPrice}</p>
      </div>
      <div className="price-details">
        <p className="desc ">Discount</p>
        <p className="desc">- {totalDiscount}</p>
      </div>
      <div className="price-details">
        <p className="desc ">Delivery Charges</p>
        <p className="desc">₹100</p>
      </div>
      <hr />
      <div className="price-details">
        <p className="desc bold">Total</p>
        <p className="desc bold">₹{totalPrice + 100 - totalDiscount}</p>
      </div>
      <hr />
      <br />

      <button className="btn-text btn-primary btn-bg-color">
        <span className="btn-text btn-primary btn-bg-color">
          Place your Order
        </span>
      </button>
    </div>
  );
};

export { Bill };
