import { createSlice } from "@reduxjs/toolkit";
import { auth } from "firebase";
import { getUserDocumentByUid, updateUserDocument } from "src/api/users";

const initialState: string[] = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadCartFromFirestore: (state) => {
            if(auth.currentUser?.uid){
                getUserDocumentByUid(auth.currentUser?.uid)
                    .then(result => {
                        state.push(...result.cart)
                    })
            }
        },
        addItemToCart: (state, action) => {
            state.push(action.payload)

            updateUserDocument({
                cart: [...state]
            })
        },
        removeItemFormCart: (state, action) => {
            const cart = state.filter((w: any) => w !== action.payload);

            updateUserDocument({
                cart: [...cart]
            })

            return cart;
        }
    }
})

export const { addItemToCart, removeItemFormCart } = cartSlice.actions;

export const selectCart = (state: any) => state.cart;

export default cartSlice.reducer;