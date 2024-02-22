import { createSlice } from "@reduxjs/toolkit";

export interface CartSliceState {
    id: string, quantity: number
}

const initialState: CartSliceState[] = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        resetCart: () => {
            return initialState;
        },
        loadCartList: (state, action) => {
            Object.entries(action.payload as Map<string, number>).forEach( ([id, quantity]) => {
                state.push({
                    id,
                    quantity
                })
            })
        },
        addItemToCart: (state, action) => {
            state.push({
                id: action.payload.id,
                quantity: action.payload.quantity
            })
        },
        removeItemFormCart: (state, action) => {
            const cart = state.filter((w: any) => w !== action.payload);
            return cart;
        }
    }
})

export const { loadCartList, addItemToCart, removeItemFormCart, resetCart } = cartSlice.actions;

export const selectCart = (state: any) => state.cart;

export default cartSlice.reducer;