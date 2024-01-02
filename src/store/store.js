import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
export default store;
