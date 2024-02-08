import { createSlice } from "@reduxjs/toolkit";

import { Articles } from "models/article";

const initialState: Articles = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.push(action.payload)
        },
        removeItemFormCart: (state, action) => {
            const cart = state.filter((w) => w !== action.payload);
            return cart;
        }
    }
})

export const { addItemToCart, removeItemFormCart } = cartSlice.actions;

export const selectCart = (state: any) => state.cart;

export default cartSlice.reducer;