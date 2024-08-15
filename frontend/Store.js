// store.js
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./src/redux/RootReducers";

const Store = configureStore({
  reducer: RootReducer,
});

export default Store;
