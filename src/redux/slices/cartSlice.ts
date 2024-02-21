import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadCartList: (state, action) => {
            state.push(...action.payload)
        },
        addItemToCart: (state, action) => {
            state.push(action.payload)
        },
        removeItemFormCart: (state, action) => {
            const cart = state.filter((w: any) => w !== action.payload);
            return cart;
        }
    }
})

export const { loadCartList, addItemToCart, removeItemFormCart } = cartSlice.actions;

export const selectCart = (state: any) => state.cart;

export default cartSlice.reducer;