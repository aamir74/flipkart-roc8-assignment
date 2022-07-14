import { useCart } from "../../hooks/cart-context";
import "./Cart.css";
import { Bill } from "./components/Bill";
import { CartCard } from "./components/CartCard";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const products = cartState.cart;

  const removeItemHandler = (product) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: { ...product } });
  };

  const updateItemHandler = (product, type) => {
    console.log("updta called");
    const updateType = type === "increment" ? "INCREMENT" : "DECREMENT";
    cartDispatch({ type: updateType, payload: { ...product } });
  };

  return (
    <div className="cart-content">
      <div className="category-heading">
        <h1>My Cart</h1>
      </div>
      <div className="cart-section">
        <div className="cart-products">
          {products?.length
            ? products.map((item) => (
                <CartCard
                  key={item.id}
                  id={item.id}
                  product={item}
                  image={item.thumbnail}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  removeFromCart={removeItemHandler}
                  updateCart={updateItemHandler}
                />
              ))
            : "No products found"}
        </div>{" "}
        {products.length ? <Bill cart={products} /> : ""}
      </div>
    </div>
  );
};
export { Cart };
