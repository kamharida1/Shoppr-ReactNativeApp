import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthenticateResponse } from "../../services/model/authResponse";
import { UserState } from "../actions";


const initialState: UserState = {
    jwt: "",
    user: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<AuthenticateResponse>) => {
            state = {
                jwt: action.payload.jwt,
                user: action.payload.user
            }
        }
    }
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer