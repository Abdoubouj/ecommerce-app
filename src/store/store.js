import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice"
const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart:cartReducer
  },
});
export default store;
