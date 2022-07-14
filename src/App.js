import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Navbar from "./customComponents/Navbar/Navbar";
import { Cart } from "./pages/cart/Cart";
import { Products } from "./pages/products/products";

function App() {
  return (
    <div className="App">
      <>
        <Router>
        <Navbar />

          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/cart" exact element={<Cart />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
