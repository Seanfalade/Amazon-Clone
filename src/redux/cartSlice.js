import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ id, name, image, price, quantity: 1 });
      }
      state.totalQuantity += quantity;
      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItems.find(
        (item) => item.id == action.payload
      );

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      } else {
        state.totalQuantity -= item.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
