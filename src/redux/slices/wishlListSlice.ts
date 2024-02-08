import { createSlice } from "@reduxjs/toolkit"

import { WishList } from "models/wishList";

const initialState: WishList = [];

const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers
    : {
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

export const selectWishList = (state: any) => state.wishList.wishList;

export default wishListSlice.reducer;