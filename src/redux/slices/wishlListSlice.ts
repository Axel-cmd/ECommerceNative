import { createSlice, current } from "@reduxjs/toolkit"
import { auth } from "firebase";
import { getUserDocumentByUid, updateUserDocument } from "src/api/users";


const initialState: string[] = [];

const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        loadWishesFromFirestore: (state) => {
            if(auth.currentUser?.uid){
                getUserDocumentByUid(auth.currentUser?.uid)
                    .then(result => {
                        state = [...result.wishes]
                    })
                    .catch(err => console.error(err))
            }
        },
        addItemToWishList: (state, action) => {
            state.push(action.payload);

            updateUserDocument({
                wishes: [...state]
            })
        },
        removeItemFormWishList: (state, action) => {
            const wishList = state.filter((w) => w !== action.payload);

            updateUserDocument({
                wishes: [...wishList]
            })
            return wishList;
        }
    }
})

export const { loadWishesFromFirestore ,addItemToWishList, removeItemFormWishList } = wishListSlice.actions;

export const selectWishList = (state: any) => state.wishList;

export default wishListSlice.reducer;