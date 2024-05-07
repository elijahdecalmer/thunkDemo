import { configureStore } from "@reduxjs/toolkit";
import prodListReducer from "./productSlice";
export const store = configureStore({
  reducer: {
    prodList: prodListReducer,
  },
});

export default store;