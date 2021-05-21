import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//GLOBAL STORE
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
