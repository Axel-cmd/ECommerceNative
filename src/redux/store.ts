import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import wishlListSlice from "./slices/wishlListSlice";
import cartSlice from "./slices/cartSlice";


export const store = configureStore({
    reducer: {
        userAuth: authSlice,
        wishList: wishlListSlice,
        cart: cartSlice
    }
})