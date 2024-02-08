import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceState } from "models/index";

const initialState: AuthSliceState = {
    isLoggedIn: false,
    userFirstName: ""
}

const authSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.isLoggedIn = true;
            state.userFirstName = action.payload;
        },
        setSignOut: (state) => {
            state.isLoggedIn = false;
            state.userFirstName = "null";
        }
    }
})

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state: any) => state.userAuth.isLoggedIn;
export const selectUser = (state: any) => state.userAuth.email;

export default authSlice.reducer;