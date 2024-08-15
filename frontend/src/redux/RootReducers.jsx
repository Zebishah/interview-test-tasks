// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import BooksManageSlice from "./Slices/BooksManageSlice";

// Import your slice reducers here
// import counterReducer from './counterSlice';
// import todoReducer from './todoSlice';

const RootReducer = combineReducers({
  bookDetail: BooksManageSlice,
});

export default RootReducer;
