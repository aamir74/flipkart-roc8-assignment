const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART_ITEMS":
      return { ...state, cart: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(filteredCart, action.payload);
      console.log("remove called");
      return { ...state, cart: filteredCart };
    case "INCREMENT": {
      const products = [...state.cart];
      const index = products.findIndex((item) => item.id === action.payload.id);
      products[index].quantity += 1;
      console.log("called");
      return { ...state, cart: products };
    }
    case "DECREMENT": {
      const products = [...state.cart];
      const index = products.findIndex((item) => item.id === action.payload.id);
      products[index].quantity -= 1;
      console.log("dec re called");
      return { ...state, cart: products };
    }
    case "EMPTY_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export { cartReducer };
