import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducer/cartSlice.js";

export default configureStore({
  reducer: cartSlice,
});
