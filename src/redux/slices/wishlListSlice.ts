import { createSlice } from "@reduxjs/toolkit"

const initialState: string[] = [];

const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        loadWishesList: (state, action) => {
            state.push(...action.payload)
        },
        addItemToWishList: (state, action) => {
            state.push(action.payload);
        },
        removeItemFormWishList: (state, action) => {
            const wishList = state.filter((w) => w !== action.payload);
            return wishList;
        }
    }
})

export const { loadWishesList ,addItemToWishList, removeItemFormWishList } = wishListSlice.actions;

export const selectWishList = (state: any) => state.wishList;

export default wishListSlice.reducer;