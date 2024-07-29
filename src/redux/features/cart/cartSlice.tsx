import { createSlice } from "@reduxjs/toolkit";

import { TCart } from "../../../types/cart.type";
import { toast } from "react-toastify";

type TInitialState = {
  cart: TCart[];
};
const initialState: TInitialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductIntoCart: (state, action) => {
      const isProductExists = state.cart.find(
        (element) => element.product._id == action.payload.product._id
      );
      if (isProductExists) {
        state.cart = state.cart.map((element) => {
          if (element.product._id == action.payload.product._id) {
            if (element.product.stockQuantity==element.quantity) {
                toast.error("Stock is not available.")
                return element
            }
            return { ...element, quantity: element.quantity + 1,totalPrice:element.totalPrice+element.product.price };
          }
          return element;
        });
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    updateProductIntoCart: (state, action) => {
        const { productId,product, quantity } = action.payload;
        console.log(action.payload)
        const isProductExists = state.cart.find(
          (element) => element.product._id == productId
        );
        if (isProductExists) {
          state.cart = state.cart.map(element => {
            if (element.product._id === productId) {
              return { ...element, quantity: quantity,totalPrice:element.product.price*quantity};
            }
            return element;
          });
        }else{
          state.cart.push({ ...action.payload,totalPrice:product.price*quantity });
        }
        
      },
    deleteProductIntocart: (state, action) => {
        console.log(action.payload)
      state.cart = state.cart.filter(
        (element) => element.product._id !== action.payload
      );
    },
  },
});
export const { addProductIntoCart,updateProductIntoCart, deleteProductIntocart } = cartSlice.actions;
export default cartSlice.reducer;
