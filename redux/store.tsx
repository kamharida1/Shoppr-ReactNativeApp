import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./cart/cartSlicer";
import filterReducer from './filter/filterSlice'

const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartSlicer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store