import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      // const item = state.find((item) => item.id === action.payload.id);
      // if (item.quantity >= 1) {
      //   item.quantity -= 1;
      // }
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1);
        }
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
