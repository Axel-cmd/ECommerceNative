import { createSlice } from "@reduxjs/toolkit"

import { Articles } from "models/article";

const initialState: Articles = [];

const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addItemToWishList: (state, action) => {
            state.push(action.payload)
        },
        removeItemFormWishList: (state, action) => {
            const wishList = state.filter((w) => w !== action.payload);
            return wishList;
        }
    }
})

export const { addItemToWishList, removeItemFormWishList } = wishListSlice.actions;

export const selectWishList = (state: any) => state.wishList;

export default wishListSlice.reducer;