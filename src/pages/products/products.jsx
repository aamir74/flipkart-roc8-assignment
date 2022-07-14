import { Card } from "../../customComponents/Card/ProductsCard";
import "./Products.css";
let products = require("../../products.json");
const Products = () => {
  console.log(products.products.length);
  const items = products.products;
  return (
    <div className="products-container">
      {items?.length
        ? items.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              name={product.title}
              price={product.price}
              rating={product.rating}
              product={product}
            />
          ))
        : "No products found"}
    </div>
  );
};
export { Products };
